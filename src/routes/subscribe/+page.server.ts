import { type Actions } from '@sveltejs/kit';
import { message, superValidate, type Infer } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriptionSchema } from '$lib/schemas/subscription';
import { subscribeUserByEmail } from '$lib/services/subscription';

type Message = { status: 'error' | 'success' | 'warning'; text: string };

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate<Infer<typeof subscriptionSchema>, Message>(
			request,
			zod(subscriptionSchema)
		);
		if (!form.valid) {
			return message(form, { status: 'error', text: form.errors.email?.[0] || '' });
		}

		const { status, message: msg } = await subscribeUserByEmail(form.data.email);

		return message(form, { status, text: msg });
	}
};
