import { getAllEpisodes } from '$lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = await getAllEpisodes();

	return { episodes };
};
