import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = await prisma.episode.findMany({
		orderBy: {
			date: 'desc'
		},
		take: 3
	});

	return { episodes };
};
