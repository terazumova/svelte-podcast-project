<script lang="ts">
	import Spotify from '$lib/icons/music/Spotify.svelte';
	import Soundcloud from '$lib/icons/music/Soundcloud.svelte';
	import AppleMusic from '$lib/icons/music/AppleMusic.svelte';

	let podcastUrl: string = 'TempAudio.mp3';
</script>

<div class="main-component">
	<img
		class="main-component__image"
		src="https://placedog.net/500?random"
		alt="How to rapidly test any experience!"
		width="180"
		height="180"
	/>
	<h1 class="sr-only">CastPress</h1>
	<h2 class="main-component__title">How to rapidly test any experience!</h2>
	<div class="main-component__player">
		{#if podcastUrl}
			<audio controls class="main-component__audio">
				<source src={podcastUrl} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		{/if}
	</div>
	<ul class="main-component__links">
		<Spotify class="main-component__link" />
		<Soundcloud class="main-component__link" />
		<AppleMusic class="main-component__link" />
	</ul>
</div>

<style>
	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

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
		max-width: 300px;
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

	:global(.main-component__link) {
		cursor: pointer;
	}
</style>
