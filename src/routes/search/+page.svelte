<script lang="ts">
	import Input from '$lib/components/common/Input.svelte';
	import EpisodesList from '$lib/components/episodes/EpisodesList.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import { onMount } from 'svelte';
	import type { EpisodeType, PostType, TeamMemberType } from '$lib/types';
	import SearchWorker from '$lib/search-worker?worker';

	let search: 'idle' | 'load' | 'ready' = $state('idle');
	let searchTerm = $state('');
	let data: { episodes: EpisodeType[]; posts: PostType[]; team: TeamMemberType[] } = $state({
		episodes: [],
		posts: [],
		team: []
	});
	let searchWorker: Worker;

	onMount(async () => {
		searchWorker = new SearchWorker();

		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;

			type === 'ready' && (search = 'ready');
			type === 'results' && (data = payload.results);
		});

		searchWorker.postMessage({ type: 'load' });
	});

	$effect(() => {
		if (search === 'ready') {
			searchWorker.postMessage({ type: 'search', payload: { searchTerm } });
		}
	});
</script>

<div class="search-block">
	<h1 class="visually-hidden">Search</h1>
	<Input
		name="text"
		bind:value={searchTerm}
		placeholder="Enter search text..."
		errors={[]}
		autocomplete="on"
	/>
	<EpisodesList episodes={data.episodes} />
	<PostList posts={data.posts} />
	<TeamList team={data.team} />
</div>

<style>
	.search-block {
		display: grid;
		gap: 64px;
	}

	.search-block :global(.input-block__input) {
		font-size: var(--fs-h5);
	}
</style>
