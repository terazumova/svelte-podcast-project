import prisma from '$lib/server/prisma';

export const load = async () => {
	const team = await prisma.teamMember?.findMany({
		where: { showOnMainPage: true },
		take: 2
	});

	return { team };
};
