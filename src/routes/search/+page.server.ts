import { getEpisodes, getEpisodesCount } from '$lib/services/episode';
import { getPosts } from '$lib/services/post';
import { getTeamMembers } from '$lib/services/team';
import type { PageServerLoad } from './$types';

const EPISODES_PER_PAGE = 3;

export const load: PageServerLoad = async ({ url }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const search = url.searchParams.get('search') ?? undefined;

	const episodes = (await getEpisodes(page, EPISODES_PER_PAGE, search)) ?? [];
	const episodesTotal = (await getEpisodesCount(search)) ?? 0;

	const posts = (await getPosts({ search })) ?? [];
	const team = (await getTeamMembers({ search })) ?? [];

	return { team, posts, episodes, episodesTotal };
};
