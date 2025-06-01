<script lang="ts">
	import Spotify from '$lib/icons/Spotify.svelte';
	import Soundcloud from '$lib/icons/Soundcloud.svelte';
	import AppleMusic from '$lib/icons/AppleMusic.svelte';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		episode: EpisodeType;
	};

	let { episode }: Props = $props();
</script>

<section class="main-component">
	<img
		class="main-component__image"
		src={episode.image}
		alt={episode.title}
		width="180"
		height="180"
	/>
	<h2 class="main-component__title heading-1">{episode.title}</h2>
	<div class="main-component__player">
		{#if episode.audio}
			<audio controls class="main-component__audio">
				<source src={episode.audio} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		{/if}
	</div>
	<ul class="main-component__links">
		<li>
			<a
				class="main-component__link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to spotify"><Spotify /></a
			>
		</li>
		<li>
			<a
				class="main-component__link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to soundcloud"><Soundcloud /></a
			>
		</li>
		<li>
			<a
				class="main-component__link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to apple music"><AppleMusic /></a
			>
		</li>
	</ul>
</section>

<style>
	.main-component {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 39px;
		width: 100%;
		padding-top: 32px;
	}

	.main-component__image {
		width: 100%;
		max-width: 180px;
		border-radius: 8px;
		object-fit: cover;
	}

	.main-component__player {
		width: 100%;
		max-width: 500px;
	}

	.main-component__audio {
		width: 100%;
	}

	.main-component__links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	.main-component__link {
		color: var(--color-black);
	}
</style>
