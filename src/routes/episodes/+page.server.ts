import { getAllEpisodes } from '$lib/services/episode';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = (await getAllEpisodes()) ?? [];

	return { episodes };
};
