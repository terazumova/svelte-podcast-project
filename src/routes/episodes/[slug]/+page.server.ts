import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const episode = await prisma.episode.findFirst({
		where: { slug: params.slug }
	});

	if (!episode) {
		throw error(404, 'Post not found');
	}

	return { episode };
};
