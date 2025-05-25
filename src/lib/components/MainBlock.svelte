<script lang="ts">
	import Spotify from '$lib/icons/music/Spotify.svelte';
	import Soundcloud from '$lib/icons/music/Soundcloud.svelte';
	import AppleMusic from '$lib/icons/music/AppleMusic.svelte';

	let podcastUrl: string = 'TempAudio.mp3';
</script>

<section class="main-component">
	<img
		class="main-component__image"
		src="https://placedog.net/500?random"
		alt="How to rapidly test any experience!"
		width="180"
		height="180"
	/>
	<h2 class="main-component__title heading-1">How to rapidly test any experience!</h2>
	<div class="main-component__player">
		{#if podcastUrl}
			<audio controls class="main-component__audio">
				<source src={podcastUrl} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		{/if}
	</div>
	<ul class="main-component__links">
		<li><a class="main-component__link" href="/" rel="noopener noreferrer"><Spotify /></a></li>
		<li><a class="main-component__link" href="/" rel="noopener noreferrer"><Soundcloud /></a></li>
		<li><a class="main-component__link" href="/" rel="noopener noreferrer"><AppleMusic /></a></li>
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

	.main-component__link {
		color: var(--color-black);
	}
</style>
