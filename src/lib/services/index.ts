import prisma from '$lib/server/prisma';

export const findEmailInSubscriptions = async (email: string) => {
	try {
		return await prisma.subscription.findUnique({
			where: { email }
		});
	} catch (error) {
		console.error('Error finding email in subscriptions:', error);
		return null;
	}
};

export const subscribeUserByEmail = async (email: string) => {
	try {
		return await prisma.subscription.create({
			data: { email }
		});
	} catch (error) {
		console.error('Error subscribing user by email:', error);
		return null;
	}
};

export const getLastThreeEpisodes = async () => {
	try {
		return await prisma.episode.findMany({
			take: 3
		});
	} catch (error) {
		console.error('Error getting last three episodes:', error);
		return [];
	}
};

export const getAllEpisodes = async () => {
	try {
		return await prisma.episode.findMany({
			orderBy: {
				date: 'desc'
			}
		});
	} catch (error) {
		console.error('Error getting all episodes:', error);
		return [];
	}
};

export const getLastTwoPosts = async () => {
	try {
		return await prisma.post.findMany({
			take: 2
		});
	} catch (error) {
		console.error('Error getting last two posts:', error);
		return [];
	}
};

export const getAllPosts = async () => {
	try {
		return await prisma.post.findMany({
			orderBy: {
				date: 'desc'
			}
		});
	} catch (error) {
		console.error('Error getting all posts:', error);
		return [];
	}
};

export const getTeamMembers = async () => {
	try {
		return await prisma.teamMember.findMany({
			where: { showOnMainPage: true },
			take: 2
		});
	} catch (error) {
		console.error('Error getting team members:', error);
		return [];
	}
};

export const getAllTeamMembers = async () => {
	try {
		return await prisma.teamMember.findMany();
	} catch (error) {
		console.error('Error getting all posts:', error);
		return [];
	}
};
