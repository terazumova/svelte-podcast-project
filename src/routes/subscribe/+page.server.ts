import type { Actions } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriptionSchema } from '$lib/schemas/subscription';
import prisma from '$lib/server/prisma';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(subscriptionSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const email = form.data.email;

		try {
			await prisma.subscription.create({
				data: { email }
			});

			return message(form, 'You have been subscribed!');
		} catch (error) {
			if (error instanceof Error && 'code' in error && error.code === 'P2002') {
				form.errors.email = ['This email is already subscribed.'];
			} else {
				form.errors.email = ['Something went wrong. Please try again later.'];
			}

			return fail(400, { form });
		}
	}
};
