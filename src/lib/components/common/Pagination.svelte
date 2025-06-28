<script lang="ts">
	import { goto } from '$app/navigation';
	import ArrowLeftShort from '$lib/icons/ArrowLeftShort.svelte';
	import ArrowRightShort from '$lib/icons/ArrowRightShort.svelte';
	import Button from './Button.svelte';

	type Props = { totalPages: number };
	let { totalPages }: Props = $props();
	let currentPage = $state(1);

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

	$effect(() => {
		goto(`?page=${currentPage}`);
	});
</script>

{#if totalPages > 1}
	<div class="pagination">
		{#if currentPage > 1}
			<Button variant="tertiary" onclick={() => (currentPage -= 1)}><ArrowLeftShort /></Button>
		{/if}

		{#each getPagination(currentPage, totalPages) as page}
			{#if typeof page === 'string'}
				<Button variant="tertiary" disabled>{page}</Button>
			{:else}
				<Button
					isActive={page === currentPage}
					variant="tertiary"
					type="submit"
					name="page"
					value={page}
					onclick={() => (currentPage = page)}>{page}</Button
				>
			{/if}
		{/each}
		{#if currentPage < totalPages}
			<Button variant="tertiary" onclick={() => (currentPage += 1)}><ArrowRightShort /></Button>
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
