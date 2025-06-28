<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes & {
		variant: 'primary' | 'secondary' | 'tertiary' | 'text';
		isActive?: boolean;
		children: Snippet;
	};

	let { variant = 'primary', isActive = false, children, ...rest }: Props = $props();
</script>

<button
	class="button"
	class:active={isActive}
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
	class:tertiary={variant === 'tertiary'}
	class:text={variant === 'text'}
	{...rest}>{@render children()}</button
>

<style>
	.button {
		cursor: pointer;
		border: none;
		border-radius: 4px;
		width: fit-content;
		font-family: 'Source Serif Pro', serif;
	}

	.button:disabled {
		opacity: 0.6;
		cursor: default;
	}

	.primary {
		background-color: var(--color-light-grey-2);
		color: var(--color-purple);
	}

	.primary:not(:disabled):active,
	.primary:not(:disabled):focus-visible,
	.primary:not(:disabled):hover {
		background-color: var(--color-purple);
		color: var(--color-white);
	}

	.secondary {
		background-color: var(--color-purple);
		color: var(--color-white);
	}

	.secondary:not(:disabled):active,
	.secondary:not(:disabled):focus-visible,
	.secondary:not(:disabled):hover {
		background-color: var(--color-dark-purple);
	}

	.tertiary {
		background-color: var(--color-light-grey-2);
		color: var(--color-dark-grey);
	}

	.tertiary:not(:disabled).active,
	.tertiary:not(:disabled):active,
	.tertiary:not(:disabled):focus-visible,
	.tertiary:not(:disabled):hover {
		background-color: var(--color-light-grey-1);
	}

	.text {
		border: none;
		background-color: transparent;
		color: var(--color-purple);
	}

	.text:not(:disabled):active,
	.text:not(:disabled):focus-visible,
	.text:not(:disabled):hover {
		color: var(--color-dark-purple);
	}
</style>
