import { getPosts } from '$lib/services/post';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getTeamMembers } from '$lib/services/team';
import { getEpisodes } from '$lib/services/episode';

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
	const search = url.searchParams.get('search') ?? undefined;

	const episodes = (await getEpisodes({ search })) ?? [];
	const posts = (await getPosts({ search })) ?? [];
	const teamMembers = (await getTeamMembers({ search })) ?? [];

	return json({ episodes, posts, teamMembers });
};
