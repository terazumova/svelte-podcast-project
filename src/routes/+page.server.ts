import { getLastThreeEpisodes } from '$lib/services/episode';
import { getLastTwoPosts } from '$lib/services/post';
import { getTeamMembers } from '$lib/services/team';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = (await getLastThreeEpisodes()) ?? [];
	const posts = (await getLastTwoPosts()) ?? [];
	const team = (await getTeamMembers()) ?? [];

	return { team, posts, episodes };
};
