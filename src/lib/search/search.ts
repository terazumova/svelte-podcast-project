import type { EpisodeType, PostType, TeamMemberType } from '$lib/types';
import * as FlexSearch from 'flexsearch';

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
		const item = `${episode.title} ${episode.description}`;
		episodesIndex.add(i, item);
	});
	episodes = episodesData;

	postsData.forEach((post, i) => {
		const item = post.title;
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
					.map((Id) => episodes[Id as number])
					.map((item: EpisodeType) => {
						return {
							...item,
							title: replaceTextWithMarker(item.title, match),
							description: replaceTextWithMarker(item.description, match)
						};
					})
			: episodes,
		posts: searchTerm
			? postsResults
					.map((Id) => posts[Id as number])
					.map((item: PostType) => {
						return {
							...item,
							title: replaceTextWithMarker(item.title, match)
						};
					})
			: posts,
		team: searchTerm
			? teamResults
					.map((Id) => team[Id as number])
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

function replaceTextWithMarker(text: string, match: string) {
	const regex = new RegExp(match, 'gi');
	return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}
