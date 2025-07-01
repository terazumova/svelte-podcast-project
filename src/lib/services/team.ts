import prisma from '$lib/server/prisma';

export const getTeamMembers = async ({
	search,
	amount,
	showOnMainPage
}: {
	search?: string;
	amount?: number;
	showOnMainPage?: boolean;
}) => {
	try {
		return await prisma.teamMember.findMany({
			where: {
				name: { contains: search, mode: 'insensitive' },
				showOnMainPage
			},
			take: amount
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
