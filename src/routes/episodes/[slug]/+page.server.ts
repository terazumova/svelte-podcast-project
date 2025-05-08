import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const episode = await prisma.episode.findFirst({
		where: { id: Number(params.slug)}
	});

	return { episode };
};
