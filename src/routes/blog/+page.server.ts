import { getAllPosts } from '$lib/services/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = (await getAllPosts()) ?? [];

	return { posts };
};
