<script lang="ts">
	import TeamList from '$lib/components/team/TeamList.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<section class="team">
	<TeamList team={data.teamMembers} />
</section>

