<script lang="ts">
	import Episode from '$lib/components/episodes/Episode.svelte';
	import Pagination from '$lib/components/common/Pagination.svelte';
	import { EPISODES_PER_PAGE } from '$lib/constants';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		total: number;
		episodes: EpisodeType[];
	};

	let { total, episodes }: Props = $props();
</script>

<section class="episodes">
	<h2 class="visually-hidden">Episodes</h2>
	{#if episodes.length}
		<ul class="episodes__list">
			{#each episodes as episode (episode.id)}
				<li><Episode {...episode} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	<Pagination totalPages={Math.ceil(total / EPISODES_PER_PAGE)} />
</section>

<style>
	.episodes__list {
		display: grid;
		gap: 51px;
		padding-bottom: 64px;
	}
</style>
