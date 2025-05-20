<script lang="ts">
	import Linkedin from '$lib/icons/social/Linkedin.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
	import type { TeamMemberType } from '$lib/types/types';

	const { id, imageUrl, name, position }: TeamMemberType = $props();
</script>

<div class="team-member">
	<img class="team-member__image" src={imageUrl} alt={name} width="300" height="300" />
	<div class="team-member__content">
		<p class="position">{position}</p>
		<a class="name" href="/team/{id}" target="_blank" rel="noopener noreferrer">{name}</a>
		<ul class="links">
			<Linkedin />
			<Github />
			<Twitter />
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

	.position {
		text-transform: uppercase;
		color: var(--color-purple);
		font-size: 12px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.name {
		font-size: 18px;
	}

	.links {
		display: flex;
		gap: 16px;
		margin-top: auto;
		color: var(--color-dark-grey);
	}
</style>
