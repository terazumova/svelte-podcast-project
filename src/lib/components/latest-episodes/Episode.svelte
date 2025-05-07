<script lang="ts">
	import Play from '$lib/icons/Play.svelte';
	import type { EpisodeType } from '$lib/types/types';

	const { id, topic, title, date, description }: EpisodeType = $props();
</script>

<div class="episode">
	<div class="episodes__tags">
		{topic} | {date}
	</div>
	<h3 class="episodes__title">{title}</h3>
	<p class="episodes__description">{description}</p>
	<a class="episodes__link" href={`/episode/${id}`} target="_blank" rel="noopener noreferrer"
		><Play /> listen now</a
	>
</div>

<style>
	.episode {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 16px;
	}

	.episodes__tags {
		font-size: 14px;
		font-weight: 400;
		color: var(--grey);
	}

	.episodes__title {
		font-size: 21px;
		font-weight: 600;
	}

	.episodes__description {
		color: var(--dark-grey);
		font-size: 16px;
		font-weight: 400;
	}

	.episodes__link {
		color: var(--purple);
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
