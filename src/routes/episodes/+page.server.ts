import { getEpisodes, getEpisodesCount } from '$lib/services/episode';
import type { PageServerLoad } from './$types';

const EPISODES_PER_PAGE = 3;

export const load: PageServerLoad = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const episodes = (await getEpisodes(page, EPISODES_PER_PAGE)) ?? [];
	const total = (await getEpisodesCount()) ?? 0;

	return { page, total, episodes };
};
