import { PrismaClient } from '@prisma-app/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.teamMember.createMany({
		data: [
			{
				name: 'Aida Cave',
				position: 'Position',
				imageUrl: 'https://i.pravatar.cc/300',
				showOnMainPage: true,
                linkedinLink: "",
                githubLink: "",
                twitterLink: ""
			},
			{
				name: 'Nick Carleton',
				position: 'Position',
				imageUrl: 'https://i.pravatar.cc/300',
				showOnMainPage: true,
                linkedinLink: "",
                githubLink: "",
                twitterLink: ""
			},
			{
				name: 'Miles Davis',
				position: 'Jazz player',
				imageUrl: 'https://i.pravatar.cc/300',
				showOnMainPage: false,
                linkedinLink: "",
                githubLink: "",
                twitterLink: ""
			}
		]
	});
}

main()
	.catch((e) => console.error(e))
	.finally(() => prisma.$disconnect());
