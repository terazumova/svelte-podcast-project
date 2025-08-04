import { createIndex, searchIndex } from './search';

addEventListener('message', async (e) => {
	const { type, payload } = e.data;

	if (type === 'load') {
		const infoData = await fetch('/api/search').then((res) => res.json());
		createIndex({
			episodesData: infoData.episodes,
			postsData: infoData.posts,
			teamData: infoData.teamMembers
		});
		postMessage({ type: 'ready' });
	}

	if (type === 'search') {
		const searchTerm = payload.searchTerm;
		const results = searchIndex(searchTerm);
		postMessage({ type: 'results', payload: { results, searchTerm } });
	}
});
