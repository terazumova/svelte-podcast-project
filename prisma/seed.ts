import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.episode.createMany({
		data: [
			{
				topic: 'Business',
				date: new Date('2022-01-01T12:00:00Z'),
				title: '23 - How to rapidly test any experience!',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...'
			},
			{
				topic: 'Business',
				date: new Date('2021-01-18T12:00:00Z'),
				title: '22 - Everything you need to know about mind mapping creation',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...'
			},
			{
				topic: 'Business',
				date: new Date('2021-01-18T12:00:00Z'),
				title: '21 - Makemeup Podcast Theme; launch it now !  ',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...'
			}
		]
	});

	await prisma.post.createMany({
		data: [
			{
				imageUrl: 'https://placedog.net/180/180?random',
				title: 'How to create your own podcast cover art?',
				date: new Date('2019-05-18T12:00:00Z')
			},
			{
				imageUrl: 'https://placedog.net/180/180?random',
				title: 'How to create your own podcast cover art?',
				date: new Date('2020-04-11T12:00:00Z')
			}
		]
	});

	await prisma.teamMember.createMany({
		data: [
			{
				name: 'Aida Cave',
				position: 'Position',
				imageUrl: 'https://placedog.net/300/300?random',
				showOnMainPage: true,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			},
			{
				name: 'Nick Carleton',
				position: 'Position',
				imageUrl: 'https://placedog.net/300/300?random',
				showOnMainPage: true,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			},
			{
				name: 'Miles Davis',
				position: 'Jazz player',
				imageUrl: 'https://placedog.net/300/300?random',
				showOnMainPage: false,
				linkedinLink: '',
				githubLink: '',
				twitterLink: ''
			}
		]
	});
}

main()
	.catch((e) => console.error(e))
	.finally(() => prisma.$disconnect());

//main убрать, сделать все через try catch, добавить console log, в catch process.exit(?), обновить типы
//audio - String
// добавить slug, чтобы использовать в server.ts
