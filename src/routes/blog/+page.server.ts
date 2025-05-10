import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await prisma.post.findMany({
		orderBy: {
			date: 'desc'
		},
		take: 3
	});

	return { posts };
};
