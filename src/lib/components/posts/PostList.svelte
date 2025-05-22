<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import type { PostType } from '$lib/types';

	type Props = {
		posts: PostType[];
	};

	let { posts }: Props = $props();
</script>

<section class="post-list">
	<h2 class="post-list__title heading-1">Latest Posts</h2>
	{#each posts as post (post.id)}
		<PostItem {...post} />
	{/each}
	<a class="post-list__link heading-5" href="/blog" target="_blank" rel="noopener noreferrer"
		>View Blog <ArrowRight /></a
	>
</section>

<style>
	.post-list {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.post-list__link {
		width: fit-content;
		background-color: var(--color-light-grey-2);
		border-radius: 3px;
		padding: 8px 16px;
		cursor: pointer;
	}
</style>
