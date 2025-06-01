import prisma from '$lib/server/prisma';

export const getLastTwoPosts = async () => {
	try {
		return await prisma.post.findMany({
			orderBy: {
				date: 'desc'
			},
			take: 2
		});
	} catch (error) {
		console.error('Error getting last two posts:', error);
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
	}
};

export const getPostBySlug = async (slug: string) => {
	try {
		return await prisma.post.findFirst({
			where: { slug }
		});
	} catch (error) {
		console.error('Error getting post:', error);
	}
};
