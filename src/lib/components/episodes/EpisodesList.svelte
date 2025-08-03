<script lang="ts">
	import Episode from '$lib/components/episodes/Episode.svelte';
	import Pagination from '$lib/components/common/Pagination.svelte';
	import { EPISODES_PER_PAGE } from '$lib/constants';
	import type { EpisodeType } from '$lib/types';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';

	type Props = {
		episodes: EpisodeType[];
		showAll?: boolean;
	};

	let { episodes, showAll = true }: Props = $props();

	let currentPage = $state(1);
	let currentEpisodes: EpisodeType[] = $state([]);
	const totalPages = $derived(Math.ceil(episodes.length / EPISODES_PER_PAGE));

	$effect(() => {
		currentEpisodes = episodes.slice(
			(currentPage - 1) * EPISODES_PER_PAGE,
			currentPage * EPISODES_PER_PAGE
		);
	});
</script>

<section class="episodes">
	<h2 class="visually-hidden">Episodes</h2>

	{#if currentEpisodes.length}
		<ul class="episodes__list">
			{#each currentEpisodes as episode (episode.id)}
				<li><Episode {...episode} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	{#if !showAll}
		<a class="episodes__link heading-5" href="/episodes">
			View all <ArrowRight />
		</a>
	{:else if totalPages > 1}
		<Pagination bind:currentPage {totalPages} />
	{/if}
</section>

<style>
	.episodes__list {
		display: grid;
		gap: 51px;
		padding-bottom: 64px;
	}

	.episodes__link {
		cursor: pointer;
		border-radius: 3px;
		background-color: var(--color-light-grey-2);
		padding: 8px 16px;
		width: fit-content;
	}
</style>
