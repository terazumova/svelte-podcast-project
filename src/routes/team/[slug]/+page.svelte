<script lang="ts">
	import TeamMember from '$lib/components/team/TeamMember.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

{#if data.teamMember}
	<TeamMember {...data.teamMember} />
{/if}
