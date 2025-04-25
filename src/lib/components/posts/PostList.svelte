<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	export let posts: {
		id: string;
		imageUrl: string;
		title: string;
		date: string;
		link: string;
	}[];
</script>

<section class="post-list">
	<h2 class="post-list__title">Latest Posts</h2>
	{#each posts as post (post.id)}
		<PostItem {...post} />
	{/each}
	<a class="post-list__link" href="/blog" target="_blank" rel="noopener noreferrer"
		>View Blog <ArrowRight /></a
	>
</section>

<style>
	.post-list {
		max-width: 670px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 25px;
		padding-top: 64px;
	}

	.post-list__link {
		width: fit-content;
		background-color: var(--light-grey-2);
		border-radius: 3px;
		padding: 8px 16px;
		cursor: pointer;
	}
</style>
