import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const teamMembers = await prisma.teamMember.findMany();

	return { teamMembers };
};
