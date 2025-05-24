<script lang="ts">
	import Linkedin from '$lib/icons/social/Linkedin.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
	import type { TeamMemberType } from '$lib/types';

	const { slug, image, name, position, linkedinLink, githubLink, twitterLink }: TeamMemberType =
		$props();
</script>

<div class="team-member">
	<img class="team-member__image" src={image} alt={name} width="300" height="300" />
	<div class="team-member__content">
		<p class="team-member__position heading-6">{position}</p>
		<a class="team-member__name heading-3" href="/team/{slug}" target="_blank">{name}</a>
		<ul class="team-member__links">
			<li>
				<a class="team-member__link" href={linkedinLink} target="_blank" rel="noopener noreferrer"
					><Linkedin /></a
				>
			</li>
			<li>
				<a class="team-member__link" href={githubLink} target="_blank" rel="noopener noreferrer"
					><Github /></a
				>
			</li>
			<li>
				<a class="team-member__link" href={twitterLink} target="_blank" rel="noopener noreferrer"
					><Twitter /></a
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
		width: 300px;
		height: 300px;
		object-fit: cover;
		border-radius: 4px 4px 0 0;
	}

	.team-member__content {
		display: flex;
		flex-direction: column;
		padding: 16px;
		flex: 1;
	}

	.team-member__position {
		text-transform: uppercase;
		color: var(--color-purple);
		margin-bottom: 8px;
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
