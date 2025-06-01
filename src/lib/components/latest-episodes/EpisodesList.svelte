<script lang="ts">
	import Episode from '$lib/components/latest-episodes/Episode.svelte';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		episodes: EpisodeType[];
	};

	let { episodes }: Props = $props();
</script>

<section class="episodes">
	<h2 class="visually-hidden">Episodes</h2>
	<ul class="episodes__list">
		{#each episodes as episode (episode.id)}
			<li><Episode {...episode} /></li>
		{/each}
	</ul>
</section>

<style>
	.episodes__list {
		display: grid;
		gap: 51px;
	}
</style>
