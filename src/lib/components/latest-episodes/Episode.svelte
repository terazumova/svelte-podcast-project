<script lang="ts">
	import Play from '$lib/icons/Play.svelte';
	import { formatDate } from '$lib/utils/date';
	import type { EpisodeType } from '$lib/types';

	let { slug, category, title, date, description, episodeNumber }: EpisodeType = $props();
</script>

<div class="episode">
	<div class="episode__tags heading-5">
		{category} | {formatDate(date)}
	</div>
	<h3 class="episode__title heading-2">{episodeNumber} - {title}</h3>
	<p class="episode__description heading-4">{description}</p>
	<a class="episode__link heading-6" href={`/episodes/${slug}`}><Play /> listen now</a>
</div>

<style>
	.episode {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 16px;
	}

	.episode__tags {
		color: var(--color-grey);
	}

	.episode__description {
		color: var(--color-dark-grey);
	}

	.episode__link {
		color: var(--color-purple);
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
