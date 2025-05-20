<script lang="ts">
	import Episode from '$lib/components/latest-episodes/Episode.svelte';
	import type { EpisodeType } from '$lib/types';

	export let episodes: EpisodeType[];
</script>

<section class="episodes-list">
	{#each episodes as episode (episode.id)}
		<Episode {...episode} />
	{/each}
</section>

<style>
	.episodes-list {
		display: grid;
		gap: 51px;
	}
</style>
