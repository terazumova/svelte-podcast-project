<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes & {
		variant: 'primary' | 'secondary' | 'tertiary' | 'text';
		active?: boolean;
		children: Snippet;
	};

	let { variant = 'primary', active = false, children, ...rest }: Props = $props();
</script>

<button class="button {variant}" class:active {...rest}>{@render children()}</button>

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

	.primary:not(:disabled) {
		&:active,
		&:focus-visible,
		&:hover {
			background-color: var(--color-purple);
			color: var(--color-white);
		}
	}

	.secondary {
		background-color: var(--color-purple);
		color: var(--color-white);
	}

	.secondary:not(:disabled) {
		&:active,
		&:focus-visible,
		&:hover {
			background-color: var(--color-dark-purple);
		}
	}

	.tertiary {
		background-color: var(--color-light-grey-2);
		color: var(--color-dark-grey);
	}

	.tertiary:not(:disabled) {
		&.active,
		&:active,
		&:focus-visible,
		&:hover {
			background-color: var(--color-light-grey-1);
		}
	}

	.text {
		border: none;
		background-color: transparent;
		color: var(--color-purple);
	}

	.text:not(:disabled) {
		&:active,
		&:focus-visible,
		&:hover {
			color: var(--color-dark-purple);
		}
	}
</style>
