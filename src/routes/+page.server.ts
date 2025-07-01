import { EPISODES_PER_PAGE, POSTS_PER_PAGE, TEAM_MEMBERS_PER_PAGE } from '$lib/constants';
import { getEpisodes } from '$lib/services/episode';
import { getPosts } from '$lib/services/post';
import { getTeamMembers } from '$lib/services/team';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = (await getEpisodes(1, EPISODES_PER_PAGE)) ?? [];
	const posts = (await getPosts({ amount: POSTS_PER_PAGE })) ?? [];
	const team =
		(await getTeamMembers({ amount: TEAM_MEMBERS_PER_PAGE, showOnMainPage: true })) ?? [];

	return { team, posts, episodes };
};
