<script lang="ts">
	import { formatDate } from '$lib/utils/date';
	import type { PostType } from '$lib/types';

	let { slug, image, title, date }: PostType = $props();
</script>

<div class="post-item">
	<img class="post-item__image" src={image} alt={title} width="180" height="180" />
	<div class="post-item__content">
		<h3 class="post-item__title heading-2">{@html title}</h3>
		<p class="post-item__date heading-5">{formatDate(date)}</p>
		<a class="post-item__link heading-5" href={`blog/${slug}`}>Read more</a>
	</div>
</div>

<style>
	.post-item {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 39px;
	}

	.post-item__image {
		border-radius: 4px;
		width: 180px;
		height: 180px;
		object-fit: cover;
	}

	.post-item__content {
		display: flex;
		flex-direction: column;
	}

	.post-item__title {
		margin-bottom: 16px;
	}

	.post-item__date {
		margin-bottom: 39px;
		color: var(--color-grey);
	}

	@media (min-width: 1024px) {
		.post-item {
			flex-direction: row;
		}
	}
</style>
