<script lang="ts">
	import ArrowLeftShort from '$lib/icons/ArrowLeftShort.svelte';
	import ArrowRightShort from '$lib/icons/ArrowRightShort.svelte';
	import Button from '$lib/components/common/Button.svelte';

	type Props = { currentPage: number; totalPages: number };
	let { currentPage = $bindable(), totalPages }: Props = $props();

	const getPagination = (current: number, total: number): (number | string)[] => {
		if (total <= 4) {
			return Array.from({ length: total }, (_, i) => i + 1);
		}

		if (current <= 3) {
			return [1, 2, 3, 4, '...', total];
		}

		if (current >= total - 3) {
			return [1, '...', total - 3, total - 2, total - 1, total];
		}

		return [1, '...', current - 1, current, current + 1, '...', total];
	};

	const navigateToPage = (newPage: number) => {
		currentPage = newPage;
	};
</script>

{#if totalPages > 1}
	<div class="pagination">
		{#if currentPage > 1}
			<Button
				variant="tertiary"
				onclick={() => navigateToPage(currentPage - 1)}
				aria-label="go to previous page"
			>
				<ArrowLeftShort />
			</Button>
		{/if}

		{#each getPagination(currentPage, totalPages) as page}
			{#if typeof page === 'string'}
				<Button variant="tertiary" disabled>{page}</Button>
			{:else}
				<Button
					active={page === currentPage}
					variant="tertiary"
					type="button"
					onclick={() => navigateToPage(page)}>{page}</Button
				>
			{/if}
		{/each}
		{#if currentPage < totalPages}
			<Button
				variant="tertiary"
				onclick={() => navigateToPage(currentPage + 1)}
				aria-label="go to next page"
			>
				<ArrowRightShort />
			</Button>
		{/if}
	</div>
{/if}

<style>
	.pagination {
		display: flex;
		gap: 5px;
	}

	.pagination :global(.button) {
		width: 30px;
		height: 30px;
	}
</style>
