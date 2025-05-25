import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriptionSchema } from '$lib/schemas/subscription';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return { form: await superValidate(zod(subscriptionSchema)) };
};
