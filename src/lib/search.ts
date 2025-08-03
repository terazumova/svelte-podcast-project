import * as FlexSearch from 'flexsearch';
import type { EpisodeType, PostType, TeamMemberType } from './types';

let episodesIndex: FlexSearch.Index;
let episodes: EpisodeType[];

let postsIndex: FlexSearch.Index;
let posts: PostType[];

let teamIndex: FlexSearch.Index;
let team: TeamMemberType[];

export function createIndex({
	episodesData,
	postsData,
	teamData
}: {
	episodesData: EpisodeType[];
	postsData: PostType[];
	teamData: TeamMemberType[];
}) {
	episodesIndex = new FlexSearch.Index({ tokenize: 'forward' });
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });
	teamIndex = new FlexSearch.Index({ tokenize: 'forward' });

	episodesData.forEach((episode, i) => {
		const item = `${episode.title} ${episode.abstract} ${episode.description}`;
		episodesIndex.add(i, item);
	});
	episodes = episodesData;

	postsData.forEach((post, i) => {
		const item = `${post.title} ${post.abstract}`;
		postsIndex.add(i, item);
	});
	posts = postsData;

	teamData.forEach((teamMember, i) => {
		const item = `${teamMember.name} ${teamMember.position}`;
		teamIndex.add(i, item);
	});
	team = teamData;
}

export function searchIndex(searchTerm: string) {
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	const episodesResults = episodesIndex.search(match);
	const postsResults = postsIndex.search(match);
	const teamResults = teamIndex.search(match);

	return {
		episodes: searchTerm
			? episodesResults
					.map((_, index: number) => episodes[index])
					.map((item: EpisodeType) => {
						return {
							...item,
							title: replaceTextWithMarker(item.title, match),
							abstract: getMatches(item.abstract, match),
							description: getMatches(item.description, match)
						};
					})
			: episodes,
		posts: searchTerm
			? postsResults
					.map((_, index: number) => posts[index])
					.map((item: PostType) => {
						return {
							...item,
							title: replaceTextWithMarker(item.title, match),
							abstract: getMatches(item.abstract, match)
						};
					})
			: posts,
		team: searchTerm
			? teamResults
					.map((_, index: number) => team[index])
					.map((item: TeamMemberType) => {
						return {
							...item,
							name: replaceTextWithMarker(item.name, match),
							position: replaceTextWithMarker(item.position, match)
						};
					})
			: team
	};
}

function getMatches(text: string, searchTerm: string, limit = 1) {
	const regex = new RegExp(searchTerm, 'gi');
	const indexes = [];
	let matches = 0;
	let match;

	while ((match = regex.exec(text)) !== null && matches < limit) {
		indexes.push(match.index);
		matches++;
	}

	return indexes.map((index) => {
		const start = index - 20;
		const end = index + 80;
		const excerpt = text.substring(start, end).trim();
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
	});
}

function replaceTextWithMarker(text: string, match: string) {
	const regex = new RegExp(match, 'gi');
	return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}
