import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const teamMember = await prisma.teamMember.findFirst({
		where: { slug: params.slug }
	});

	return { teamMember };
};
