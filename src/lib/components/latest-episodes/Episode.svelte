<script lang="ts">
	import Play from '$lib/icons/Play.svelte';
	import type { EpisodeType } from '$lib/types';
	import { formatDate } from '$lib/utils/date';

	const { slug, category, title, date, description }: EpisodeType = $props();
</script>

<div class="episode">
	<div class="episodes__tags">
		{category} | {formatDate(date)}
	</div>
	<h2 class="episodes__title">{title}</h2>
	<p class="episodes__description">{description}</p>
	<a class="episodes__link" href={`/episodes/${slug}`} target="_blank" rel="noopener noreferrer"
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
		font-size: var(--font-size-h5);
		font-weight: var(--font-weight-regular);
		color: var(--color-grey);
	}

	.episodes__description {
		color: var(--color-dark-grey);
		font-size: var(--font-size-h4);
		font-weight: var(--font-weight-regular);
	}

	.episodes__link {
		color: var(--color-purple);
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
