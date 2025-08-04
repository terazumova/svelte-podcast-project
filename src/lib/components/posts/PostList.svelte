<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import { POSTS_PER_PAGE } from '$lib/constants';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';
	import type { PostType } from '$lib/types';
	import Pagination from '$lib/components/common/Pagination.svelte';

	type Props = {
		posts: PostType[];
		showAll?: boolean;
	};

	let { posts, showAll = true }: Props = $props();
	let currentPage = $state(1);
	let currentPosts: PostType[] = $derived(
		posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE) ?? []
	);
	const totalPages = $derived(Math.ceil(posts.length / POSTS_PER_PAGE));
</script>

<section class="posts">
	<h2 class="posts__title heading-1">{showAll ? 'Posts' : 'Latest Posts'}</h2>
	{#if currentPosts.length}
		<ul class="post__list">
			{#each currentPosts as post (post.id)}
				<li><PostItem {...post} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	{#if !showAll}
		<a class="posts__link heading-5" href="/blog">View Blog <ArrowRight /></a>
	{:else if totalPages > 1}
		<Pagination bind:currentPage {totalPages} />
	{/if}
</section>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.post__list {
		display: grid;
		gap: 24px;
	}

	.posts__link {
		cursor: pointer;
		border-radius: 3px;
		background-color: var(--color-light-grey-2);
		padding: 8px 16px;
		width: fit-content;
	}
</style>
