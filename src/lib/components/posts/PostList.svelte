<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import type { PostType } from '$lib/types';

	type Props = {
		posts: PostType[];
	};

	let { posts }: Props = $props();
</script>

<section class="posts">
	<h2 class="posts__title heading-1">Latest Posts</h2>
	<ul class="post__list">
		{#each posts as post (post.id)}
			<li><PostItem {...post} /></li>
		{/each}
	</ul>
	<a class="posts__link heading-5" href="/blog">View Blog <ArrowRight /></a>
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
		width: fit-content;
		background-color: var(--color-light-grey-2);
		border-radius: 3px;
		padding: 8px 16px;
		cursor: pointer;
	}
</style>
