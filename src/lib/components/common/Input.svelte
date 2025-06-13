<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = HTMLInputAttributes & {
		errors?: string[];
		button: Snippet;
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
		align-items: center;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: var(--color-light-grey-2);
		padding-right: 3px;
		position: relative;
	}

	.input-block:focus {
		border: 1px solid var(--color-purple);
		outline: none;
	}

	.input-block:disabled {
		background-color: var(--color-grey);
		cursor: not-allowed;
	}

	.input-block__input {
		font-size: var(--fs-h6);
		font-weight: var(--fw-regular);
		padding: 14px 0 14px 14px;
		background-color: transparent;
		border: none;
		width: 100%;
	}

	.input-block__input:focus {
		outline: none;
	}

	.input-block__message {
		font-size: var(--fs-h6);
		font-weight: var(--fw-regular);
		position: absolute;
		left: 0;
		bottom: -24px;
	}
</style>
