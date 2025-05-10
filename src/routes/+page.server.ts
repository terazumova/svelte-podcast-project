import prisma from '$lib/server/prisma';

export const load = async () => {
	const episodes = await prisma.episode.findMany({
		take: 3
	});

	const posts = await prisma.post.findMany({
		take: 2
	});

	const team = await prisma.teamMember.findMany({
		where: { showOnMainPage: true },
		take: 2
	});

	return { team, posts, episodes };
};
