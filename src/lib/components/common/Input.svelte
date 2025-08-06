<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = HTMLInputAttributes & {
		errors?: string[];
		button?: Snippet;
	};

	let { value = $bindable(), errors, button, ...rest }: Props = $props();
</script>

<div class="input-block">
	<input {...rest} class="input-block__input" bind:value oninput={() => (errors = [])} />
	{#if button}
		{@render button()}
	{/if}

	{#if errors?.[0]}
		<p class="input-block__message error">
			{errors[0]}
		</p>
	{/if}
</div>

<style>
	.input-block {
		display: flex;
		position: relative;
		align-items: center;
		border: none;
		border-radius: 4px;
		background-color: var(--color-light-grey-2);
		padding-right: 3px;
		width: 100%;
	}

	.input-block:focus {
		outline: none;
		border: 1px solid var(--color-purple);
	}

	.input-block:disabled {
		cursor: not-allowed;
		background-color: var(--color-grey);
	}

	.input-block__input {
		border: none;
		background-color: transparent;
		padding: 14px 0 14px 14px;
		width: 100%;
		font-weight: var(--fw-regular);
		font-size: var(--fs-h6);
	}

	.input-block__input:focus {
		outline: none;
	}

	.input-block__message {
		position: absolute;
		bottom: -24px;
		left: 0;
		font-weight: var(--fw-regular);
		font-size: var(--fs-h6);
	}
</style>
