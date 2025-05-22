import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const post = await prisma.post.findFirst({
		where: { slug: params.slug }
	});

	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};
