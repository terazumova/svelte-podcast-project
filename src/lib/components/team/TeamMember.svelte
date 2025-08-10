<script lang="ts">
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { TeamMemberType } from '$lib/types';

	let { slug, image, name, position, linkedinLink, githubLink, twitterLink }: TeamMemberType =
		$props();
</script>

<div class="team-member">
	<img class="team-member__image" src={image} alt={name} width="300" height="300" />
	<div class="team-member__content">
		<p class="team-member__position heading-6">{@html position}</p>
		<a href="/team/{slug}"><h3 class="team-member__name heading-3">{@html name}</h3></a>
		<ul class="team-member__links">
			<li>
				<a
					class="team-member__link"
					href={linkedinLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="go to linkedin profile"><Linkedin /></a
				>
			</li>
			<li>
				<a
					class="team-member__link"
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="go to github profile"><Github /></a
				>
			</li>
			<li>
				<a
					class="team-member__link"
					href={twitterLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="go to twitter profile"><Twitter /></a
				>
			</li>
		</ul>
	</div>
</div>

<style>
	.team-member {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		background-color: var(--color-light-grey-2);
		min-height: 435px;
	}

	.team-member__image {
		border-radius: 4px 4px 0 0;
		width: 300px;
		height: 300px;
		object-fit: cover;
	}

	.team-member__content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 16px;
	}

	.team-member__position {
		margin-bottom: 8px;
		color: var(--color-purple);
		text-transform: uppercase;
	}

	.team-member__name {
		color: var(--color-black);
	}

	.team-member__links {
		display: flex;
		gap: 16px;
		margin-top: auto;
	}

	.team-member__link {
		color: var(--color-dark-grey);
	}
</style>
