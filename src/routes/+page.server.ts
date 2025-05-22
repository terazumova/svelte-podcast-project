import { getLastThreeEpisodes, getLastTwoPosts, getTeamMembers } from '$lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = await getLastThreeEpisodes();
	const posts = await getLastTwoPosts();
	const team = await getTeamMembers();

	return { team, posts, episodes };
};
