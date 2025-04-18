<script lang="ts">
	import Episode from '$lib/components/latest-episodes/Episode.svelte';

	export let episodes: {
		id: string;
		topic: string;
		date: string;
		title: string;
		description: string;
		link: string;
	}[];
</script>

<section class="episodes-list">
	{#each episodes as episode (episode.id)}
		<Episode {...episode} />
	{/each}
</section>

<style>
	.episodes-list {
		max-width: 670px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 70px;
		padding-top: 64px;
	}
</style>
