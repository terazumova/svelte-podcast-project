<script lang="ts">
	import TeamMember from '$lib/components/team/TeamMember.svelte';
	import { TEAM_MEMBERS_PER_PAGE } from '$lib/constants';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';
	import type { TeamMemberType } from '$lib/types';
	import Pagination from '$lib/components/common/Pagination.svelte';

	type Props = {
		team: TeamMemberType[];
		showAll?: boolean;
	};

	let { team, showAll = true }: Props = $props();
	let currentPage = $state(1);
	let currentTeamMembers: TeamMemberType[] = $derived(
		team.slice((currentPage - 1) * TEAM_MEMBERS_PER_PAGE, currentPage * TEAM_MEMBERS_PER_PAGE) ?? []
	);
	const totalPages = $derived(Math.ceil(team.length / TEAM_MEMBERS_PER_PAGE));
</script>

<section class="team">
	<h2 class="team__title heading-1">Team</h2>
	{#if currentTeamMembers.length}
		<ul class="team__list">
			{#each currentTeamMembers as member (member.id)}
				<li class="team__member"><TeamMember {...member} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	{#if !showAll}
		<a class="team__link" href="/team">Read all <ArrowRight /></a>
	{:else if totalPages > 1}
		<Pagination bind:currentPage {totalPages} />
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
