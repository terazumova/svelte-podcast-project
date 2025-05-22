<script lang="ts">
	import Episode from '$lib/components/latest-episodes/Episode.svelte';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		episodes: EpisodeType[];
	};

	let { episodes }: Props = $props();
</script>

<section class="episodes-list">
	<h2 class="sr-only">Episodes</h2>
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
