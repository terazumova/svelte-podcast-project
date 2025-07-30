<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';
	import type { PostType } from '$lib/types';

	type Props = {
		posts: PostType[];
		showAll?: boolean;
	};

	let { posts, showAll = true }: Props = $props();
</script>

<section class="posts">
	<h2 class="posts__title heading-1">{showAll ? 'Posts' : 'Latest Posts'}</h2>
	{#if posts.length}
		<ul class="post__list">
			{#each posts as post (post.id)}
				<li><PostItem {...post} /></li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
	{#if !showAll}
		<a class="posts__link heading-5" href="/blog">View Blog <ArrowRight /></a>
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
