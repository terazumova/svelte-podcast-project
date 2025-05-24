import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const teamMember = await prisma.teamMember.findFirst({
		where: { slug: params.slug }
	});

	if (!teamMember) {
		throw error(404, 'Team member not found');
	}

	return { teamMember };
};
