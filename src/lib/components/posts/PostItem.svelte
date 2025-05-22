<script lang="ts">
	import type { PostType } from '$lib/types';
	import { formatDate } from '$lib/utils/date';

	const { slug, image, title, date }: PostType = $props();
</script>

<div class="post-item">
	<img class="post-item__image" src={image} alt={title} width="180" height="180" />
	<div class="post-item__content">
		<h2 class="title">{title}</h2>
		<p class="date">{formatDate(date)}</p>
		<a class="link" href={`blog/${slug}`} target="_blank" rel="noopener noreferrer">Read more</a>
	</div>
</div>

<style>
	.post-item {
		display: flex;
		align-items: start;
		gap: 39px;
	}

	.post-item__image {
		width: 180px;
		height: 180px;
		object-fit: cover;
		border-radius: 4px;
	}

	.post-item__content {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 21px;
		margin-bottom: 16px;
	}

	.date {
		color: var(--color-grey);
		font-size: 14px;
		margin-bottom: 39px;
	}
</style>
