<script lang="ts">
	import TeamMember from '$lib/components/team/TeamMember.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import type { TeamMemberType } from '$lib/types';

	type Props = {
		team: TeamMemberType[];
	};

	let { team }: Props = $props();
</script>

<section class="team">
	<h2 class="team__title heading-1">Team</h2>
	<ul class="team__list">
		{#each team as member (member.id)}
			<li><TeamMember {...member} /></li>
		{/each}
	</ul>
	<a class="team__link" href="/team" target="_blank">Read all <ArrowRight /></a>
</section>

<style>
	.team {
		display: flex;
		flex-direction: column;
		gap: 39px;
	}

	.team__list {
		display: flex;
		flex-wrap: wrap;
		gap: 69px;
	}

	.team__link {
		width: fit-content;
		background-color: var(--color-light-grey-2);
		border-radius: 3px;
		padding: 8px 16px;
		cursor: pointer;
	}
</style>
