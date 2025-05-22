import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

try {
	const episodeWithPost = await prisma.episode.create({
		data: {
			slug: 'episode-23',
			episodeNumber: 23,
			category: 'Business',
			date: new Date('2022-01-01T12:00:00Z'),
			title: 'How to rapidly test any experience!',
			abstract:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
			transcript: 'Transcript content here...',
			audio: '',
			tags: ['#Apple', '#Keynote', '#Product'],
			posts: {
				create: [
					{
						slug: 'how-to-create-your-own-podcast-cover-art',
						image: 'https://placedog.net/180/180?random',
						title: 'How to create your own podcast cover art?',
						abstract:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
						text: 'Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa. Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.',
						tags: ['#Apple', '#Keynote', '#Product']
					}
				]
			}
		}
	});

	const episodes = await prisma.episode.createMany({
		data: [
			{
				slug: 'episode-21',
				episodeNumber: 21,
				category: 'Business',
				date: new Date('2022-01-01T12:00:00Z'),
				title: 'Everything you need to know about mind mapping creation',
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
				transcript: 'Transcript content here...',
				audio: '',
				tags: ['#Apple', '#Keynote', '#Product']
			},
			{
				slug: 'episode-22',
				episodeNumber: 22,
				category: 'Business',
				date: new Date('2022-01-01T12:00:00Z'),
				title: 'Everything you need to know about mind mapping creation',
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
				transcript: 'Transcript content here...',
				audio: '',
				tags: ['#Apple', '#Keynote', '#Product']
			}
		]
	});

	const posts = await prisma.post.createMany({
		data: [
			{
				slug: 'how-to-create-your-own-podcast-cover-art',
				image: 'https://placedog.net/180/180?random',
				title: 'How to create your own podcast cover art?',
				date: new Date('2019-05-18T12:00:00Z'),
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
				text: 'Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa. Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.',
				tags: ['#Apple', '#Keynote', '#Product']
			},
			{
				slug: 'how-to-create-your-own-podcast-cover-art',
				image: 'https://placedog.net/180/180?random',
				title: 'How to create your own podcast cover art?',
				date: new Date('2020-04-11T12:00:00Z'),
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique bibendum.ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.',
				text: 'Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa. Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.',
				tags: ['#Apple', '#Keynote', '#Product']
			}
		]
	});

	const teamMembers = await prisma.teamMember.createMany({
		data: [
			{
				slug: 'aida-cave',
				name: 'Aida Cave',
				position: 'Position',
				image: 'https://placedog.net/300/300?random',
				showOnMainPage: true,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			},
			{
				slug: 'nick-carleton',
				name: 'Nick Carleton',
				position: 'Position',
				image: 'https://placedog.net/300/300?random',
				showOnMainPage: true,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			},
			{
				slug: 'miles-davis',
				name: 'Miles Davis',
				position: 'Jazz player',
				image: 'https://placedog.net/300/300?random',
				showOnMainPage: false,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			}
		]
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
