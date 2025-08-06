<script lang="ts">
	import Input from '$lib/components/common/Input.svelte';
	import EpisodesList from '$lib/components/episodes/EpisodesList.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import { onMount } from 'svelte';
	import type { EpisodeType, PostType, TeamMemberType } from '$lib/types';
	import SearchWorker from '$lib/search/worker?worker';
	import Spinner from '$lib/components/common/Spinner.svelte';

	let search: 'idle' | 'load' | 'ready' = $state('idle');
	let searchTerm = $state('');
	let data: { episodes: EpisodeType[]; posts: PostType[]; team: TeamMemberType[] } = $state({
		episodes: [],
		posts: [],
		team: []
	});
	let searchWorker: Worker;
	let timer: NodeJS.Timeout;

	onMount(async () => {
		searchWorker = new SearchWorker();

		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;

			type === 'ready' && searchTerm === '' && handleSearch();
			type === 'results' && (data = payload.results);

			search = 'ready';
		});

		searchWorker.postMessage({ type: 'load' });
	});

	const handleSearch = () => searchWorker.postMessage({ type: 'search', payload: { searchTerm } });

	const handleDebouncedSearch = (value: string) => {
		searchTerm = value;

		if (search !== 'load') {
			search = 'load';

			clearTimeout(timer);
			timer = setTimeout(() => {
				handleSearch();
			}, 500);
		}
	};
</script>

<div class="search-block">
	<h1 class="visually-hidden">Search</h1>
	<Input
		name="text"
		placeholder="Enter search text..."
		errors={[]}
		autocomplete="on"
		onkeyup={(e: KeyboardEvent) => handleDebouncedSearch((e.target as HTMLInputElement).value)}
	/>
	{#if search !== 'ready'}
		<Spinner />
	{:else}
		{#key data}
			{#if data.episodes.length}
				<EpisodesList episodes={data.episodes} />
			{/if}
			{#if data.posts.length}
				<PostList posts={data.posts} />
			{/if}
			{#if data.team.length}
				<TeamList team={data.team} />
			{/if}
			{#if !data.episodes.length && !data.posts.length && !data.team.length}
				<p>No results</p>
			{/if}
		{/key}
	{/if}
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
