import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await prisma.post.findFirst({
		where: { id: Number(params.slug) }
	});

	return { post };
};
