import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { subscriptionSchema } from '$lib/schemas/subscription';
import type { LayoutServerLoad } from './$types';
import { EPISODES_PER_PAGE } from '$lib/constants';
import { getEpisodes } from '$lib/services/episode';

export const load: LayoutServerLoad = async () => {
	const episodes = (await getEpisodes(1, EPISODES_PER_PAGE)) ?? [];
	return { form: await superValidate(zod(subscriptionSchema)), episodes };
};
