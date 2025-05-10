export type EpisodeType = {
	id: number;
	topic: string;
	date: Date;
	title: string;
	description: string;
};

export type PostType = {
	id: number;
	imageUrl: string;
	title: string;
	date: Date;
};

export type TeamMemberType = {
	id: number;
	imageUrl: string;
	name: string;
	position: string;
	showOnMainPage: boolean;
	linkedinLink: string;
	githubLink: string;
	twitterLink: string;
};
