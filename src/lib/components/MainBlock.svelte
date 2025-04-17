<script lang="ts">
	import Spotify from '$lib/icons/music/Spotify.svelte';
	import Soundcloud from '$lib/icons/music/Soundcloud.svelte';
	import AppleMusic from '$lib/icons/music/AppleMusic.svelte';

	let photoUrl: string = 'CurrentImage.png';
	let podcastUrl: string = 'CurrentMusic.mp3';
</script>

<div class="main-component">
	<div class="main-component__image">
		<img
			src={photoUrl}
			alt="How to rapidly test any experience!"
			class="main-component__image--photo"
		/>
	</div>
	<h1 class="main-component__title">How to rapidly test any experience!</h1>
	<div class="main-component__player">
		{#if podcastUrl}
			<audio controls class="main-component__audio">
				<source src={podcastUrl} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		{/if}
	</div>
	<div class="main-component__links">
		<Spotify class="main-component__link" />
		<Soundcloud class="main-component__link" />
		<AppleMusic class="main-component__link" />
	</div>
</div>

<style>
	.main-component {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 670px;
		margin: 0 auto;
		text-align: center;
		padding-top: 96px;
	}

	.main-component__image {
		width: 100%;
		max-width: 300px;
		margin-bottom: 1rem;
	}

	.main-component__image--photo {
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
	}

	.main-component__title {
		font-size: 1.8rem;
		color: #333;
		margin-bottom: 1.5rem;
		font-weight: 600;
	}

	.main-component__player {
		width: 100%;
		max-width: 500px;
	}

	.main-component__audio {
		width: 100%;
		border-radius: 8px;
		margin-top: 1rem;
	}

	.main-component__links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		padding-top: 39px;
	}

	.main-component__link {
		cursor: pointer;
	}
</style>
