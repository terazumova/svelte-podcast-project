<script lang="ts">
	import EpisodesList from '$lib/components/latest-episodes/EpisodesList.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<EpisodesList episodes={data.episodes} />
