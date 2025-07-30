<script lang="ts">
	import TeamMember from '$lib/components/team/TeamMember.svelte';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';
	import type { TeamMemberType } from '$lib/types';

	type Props = {
		team: TeamMemberType[];
		showAll?: boolean;
	};

	let { team, showAll = true }: Props = $props();
</script>

<section class="team">
	<h2 class="team__title heading-1">Team</h2>
	{#if team.length}
		<ul class="team__list">
			{#each team as member (member.id)}
				<li class="team__member"><TeamMember {...member} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	{#if !showAll}
		<a class="team__link" href="/team">Read all <ArrowRight /></a>
	{/if}
</section>

<style>
	.team {
		display: grid;
		gap: 39px;
	}

	.team__list {
		display: flex;
		flex-wrap: wrap;
		gap: 69px;
	}

	.team__link {
		cursor: pointer;
		border-radius: 3px;
		background-color: var(--color-light-grey-2);
		padding: 8px 16px;
		width: fit-content;
	}

	.team__member {
		margin: auto;
	}
</style>
