import prisma from '$lib/server/prisma';

export const getLastThreeEpisodes = async () => {
	try {
		return await prisma.episode.findMany({
			orderBy: {
				date: 'desc'
			},
			take: 3
		});
	} catch (error) {
		console.error('Error getting last three episodes:', error);
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
