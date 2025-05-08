<script lang="ts">
	import type { PostType } from '$lib/types/types';
	import { formatDate } from '$lib/utils/date';

	const { id, imageUrl, title, date }: PostType = $props();
</script>

<div class="post-item">
	<img class="post-item__image" src={imageUrl} alt={title} width="180" height="180" />
	<div class="post-item__content">
		<h3 class="title">{title}</h3>
		<p class="date">{formatDate(date)}</p>
		<a class="link" href={`blog/${id}`} target="_blank" rel="noopener noreferrer">Read more</a>
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
		color: var(--grey);
		font-size: 14px;
		margin-bottom: 39px;
	}
</style>
