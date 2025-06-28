<script lang="ts">
	import Episode from '$lib/components/episodes/Episode.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

{#if data.episode}
	<Episode {...data.episode} />
{/if}
