<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Button from './Button.svelte';

	type OptionProps = { label: string; value: string };
	type Props = {
		options: OptionProps[];
		defaultOption?: OptionProps;
		handleChange: (value: OptionProps) => void;
		placeholder?: string;
	};

	let { options, defaultOption, placeholder, handleChange }: Props = $props();
	let isDropdownOpen = $state(false);

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
	};

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }: FocusEvent) => {
		if (
			relatedTarget instanceof HTMLElement &&
			(currentTarget as HTMLElement).contains(relatedTarget)
		)
			return;
		isDropdownOpen = false;
	};
</script>

<div class="dropdown" onfocusout={handleDropdownFocusLoss}>
	<Button onclick={handleDropdownClick} variant="text">
		<p class="dropdown__value heading-6">
			{defaultOption?.label ?? placeholder ?? ''}
			<ArrowDown />
		</p>
	</Button>
	<ul class="dropdown__list" style:display={isDropdownOpen ? 'grid' : 'none'}>
		{#each options as option (option.value)}
			<li class="dropdown__option">
				<Button variant="text" onclick={() => handleChange(option)}>{option.label}</Button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.dropdown {
		position: relative;
	}

	.dropdown__value {
		display: flex;
		align-items: center;
		gap: 4px;
		color: var(--color-black);
		text-transform: uppercase;
	}

	.dropdown__value:hover {
		color: var(--color-purple);
	}

	.dropdown__list {
		position: absolute;
		z-index: 1;
		border: 1px solid var(--color-light-grey-1);
		background-color: var(--color-white);
		padding: 8px 0;
		min-width: 200px;
	}

	.dropdown__option {
		cursor: pointer;
		padding: 8px 16px;
	}

	.dropdown__option :global(.button) {
		width: 100%;
		height: 100%;
		color: var(--color-black);
		text-align: left;
	}

	.dropdown__option:hover {
		background-color: var(--color-light-grey-3);
	}
</style>
