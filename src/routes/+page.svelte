<script lang="ts">
	import EpisodesList from '$lib/components/episodes/EpisodesList.svelte';
	import MainBlock from '$lib/components/MainBlock.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import { EPISODES_PER_PAGE } from '$lib/constants';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<h1 class="visually-hidden">CastPress</h1>
{#if data.episodes?.[0]}
	<MainBlock episode={data.episodes[0]} />
{/if}
<EpisodesList episodes={data.episodes} total={EPISODES_PER_PAGE} />
<PostList posts={data.posts} showAll={false} />
<TeamList team={data.team} showAll={false} />
