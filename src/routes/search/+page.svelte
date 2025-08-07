<script lang="ts">
	import Input from '$lib/components/common/Input.svelte';
	import EpisodesList from '$lib/components/episodes/EpisodesList.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import { onMount } from 'svelte';
	import type { EpisodeType, PostType, TeamMemberType } from '$lib/types';
	import SearchWorker from '$lib/search/worker?worker';
	import Spinner from '$lib/components/common/Spinner.svelte';
	import { Debounced } from 'runed';

	let search = $state<'idle' | 'ready'>('idle');
	let searchTerm = $state('');
	let results = $state<{
		episodes: EpisodeType[];
		posts: PostType[];
		team: TeamMemberType[];
	} | null>(null);

	let searchWorker: Worker;

	onMount(async () => {
		searchWorker = new SearchWorker();

		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;

			type === 'ready' && (search = 'ready');
			type === 'results' && (results = payload.results);
		});

		searchWorker.postMessage({ type: 'load' });
	});

	const debounced = new Debounced(() => searchTerm, 500);

	$effect(() => {
		if (search === 'ready') {
			searchWorker.postMessage({ type: 'search', payload: { searchTerm: debounced.current } });
		}
	});
</script>

<div class="search-block">
	<h1 class="visually-hidden">Search</h1>
	<Input
		name="text"
		placeholder="Enter search text..."
		errors={[]}
		autocomplete="on"
		bind:value={searchTerm}
	/>
	{#if search !== 'ready'}
		<Spinner />
	{:else if results}
		{#key results}
			{#if results.episodes.length}
				<EpisodesList episodes={results.episodes} />
			{/if}
			{#if results.posts.length}
				<PostList posts={results.posts} />
			{/if}
			{#if results.team.length}
				<TeamList team={results.team} />
			{/if}
			{#if !results.episodes.length && !results.posts.length && !results.team.length}
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
