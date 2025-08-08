import prisma from '$lib/server/prisma';

export const getEpisodes = async ({ search, amount }: { search?: string; amount?: number }) => {
	try {
		return await prisma.episode.findMany({
			where: { title: { contains: search, mode: 'insensitive' } },
			take: amount,
			orderBy: {
				date: 'desc'
			}
		});
	} catch (error) {
		console.error('Error getting last three episodes:', error);
	}
};

export const getEpisodesCount = async (search?: string) => {
	try {
		return await prisma.episode.count({
			where: {
				title: {
					contains: search,
					mode: 'insensitive'
				}
			}
		});
	} catch (error) {
		console.error('Error getting episodes count:', error);
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
	}
};

export const getEpisodeBySlug = async (slug: string) => {
	try {
		return await prisma.episode.findFirst({
			where: { slug }
		});
	} catch (error) {
		console.error('Error getting episode:', error);
	}
};
