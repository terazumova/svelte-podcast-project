import { EPISODES_PER_PAGE } from '$lib/constants';
import { getEpisodes, getEpisodesCount } from '$lib/services/episode';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') ?? '1');
	const episodes = (await getEpisodes(page, EPISODES_PER_PAGE)) ?? [];
	const total = (await getEpisodesCount()) ?? 0;

	return { page, total, episodes };
};
