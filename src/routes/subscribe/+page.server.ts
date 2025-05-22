import { type Actions } from '@sveltejs/kit';
import { fail, message, superValidate, type Infer } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriptionSchema } from '$lib/schemas/subscription';
import { findEmailInSubscriptions, subscribeUserByEmail } from '$lib/services';

type Message = { status: 'error' | 'success' | 'warning'; text: string };

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate<Infer<typeof subscriptionSchema>, Message>(
			request,
			zod(subscriptionSchema)
		);
		if (!form.valid) {
			return fail(400, { form });
		}

		const subscription = await findEmailInSubscriptions(form.data.email);

		if (subscription) {
			return message(form, { status: 'error', text: 'This email is already subscribed.' });
		}

		const newSubscription = await subscribeUserByEmail(form.data.email);

		if (newSubscription) {
			return message(form, { status: 'success', text: 'You have been subscribed!' });
		}

		return message(form, {
			status: 'error',
			text: 'Something went wrong. Please try again later.'
		});
	}
};
