<script lang="ts">
	import { goto } from '$app/navigation';
	import Input from '$lib/components/common/Input.svelte';
	import EpisodesList from '$lib/components/episodes/EpisodesList.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
	import Search from '$lib/icons/Search.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
	let search = $state('');

	const handleSearch = () => goto(`?search=${search}&page=1`);
</script>

<div class="search-block">
	<h1 class="visually-hidden">Search</h1>
	<Input
		id="search"
		name="text"
		bind:value={search}
		placeholder="Enter search text..."
		errors={[]}
		onkeydown={(e) => (e.key === 'Enter' ? handleSearch() : null)}
	>
		{#snippet button()}
			<button class="button" onclick={handleSearch}>
				<Search />
			</button>
		{/snippet}</Input
	>
	<EpisodesList episodes={data.episodes} total={data.episodesTotal} />
	<PostList posts={data.posts} />
	<TeamList team={data.team} />
</div>

<style>
	.search-block {
		display: grid;
		gap: 64px;
	}

	.search-block :global(.input-block__input) {
		font-size: var(--fs-h5);
	}

	.search-block .button {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: none;
		border-radius: 4px;
		background-color: var(--color-purple);
		min-width: 36px;
		height: 36px;
		color: var(--color-white);
	}
</style>
