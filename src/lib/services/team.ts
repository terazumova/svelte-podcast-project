import prisma from '$lib/server/prisma';

export const getTeamMembers = async () => {
	try {
		return await prisma.teamMember.findMany({
			where: { showOnMainPage: true },
			take: 2
		});
	} catch (error) {
		console.error('Error getting team members:', error);
	}
};

export const getAllTeamMembers = async () => {
	try {
		return await prisma.teamMember.findMany();
	} catch (error) {
		console.error('Error getting all posts:', error);
	}
};

export const getTeamMemberBySlug = async (slug: string) => {
	try {
		return await prisma.teamMember.findFirst({
			where: { slug }
		});
	} catch (error) {
		console.error('Error getting team member:', error);
	}
};
