import { PrismaClient } from '@prisma/client';
import { episodesData, episodeWithPostData, postsData, teamMembersData } from './mock-data';

const prisma = new PrismaClient();

try {
	const episodeWithPost = await prisma.episode.create({
		data: episodeWithPostData
	});

	const episodes = await prisma.episode.createMany({
		data: episodesData
	});

	const posts = await prisma.post.createMany({
		data: postsData
	});

	const teamMembers = await prisma.teamMember.createMany({
		data: teamMembersData
	});

	console.log('EPISODE WITH POST ADDED', !!episodeWithPost);
	console.log('EPISODES COUNT', episodes.count);
	console.log('POSTS COUNT', posts.count);
	console.log('TEAM MEMBERS COUNT', teamMembers.count);
} catch (e) {
	console.error(e);
	process.exit(1);
} finally {
	prisma.$disconnect();
}
