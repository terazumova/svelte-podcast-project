import prisma from '$lib/server/prisma';

export const getPosts = async ({ search, amount }: { search?: string; amount?: number }) => {
	try {
		return await prisma.post.findMany({
			where: { title: { contains: search, mode: 'insensitive' } },
			take: amount,
			orderBy: {
				date: 'desc'
			}
		});
	} catch (error) {
		console.error('Error getting last two posts:', error);
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
