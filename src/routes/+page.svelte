<script lang="ts">
	import EpisodesList from '$lib/components/latest-episodes/EpisodesList.svelte';
	import MainBlock from '$lib/components/MainBlock.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<h1 class="sr-only">CastPress</h1>
<MainBlock />
<EpisodesList episodes={data.episodes} />
<PostList posts={data.posts} />
<TeamList team={data.team} />
