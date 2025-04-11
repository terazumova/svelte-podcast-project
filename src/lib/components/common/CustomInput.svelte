<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	export let value: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let disabled: boolean = false;
	export let className: string = '';
	export let onButtonClick: () => void = () => {};
</script>

<div class="custom-input">
	<input class="custom-input__field {className}" {type} {placeholder} {disabled} bind:value />
	{#if onButtonClick}
		<button class="custom-input__button" on:click={onButtonClick} {disabled}>
			<ArrowRight />
		</button>
	{/if}
</div>

<style>
	.custom-input {
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: var(--light-grey-2);
		padding-right: 3px;
	}

	.custom-input:focus {
		border: 1px solid var(--purple);
		outline: none;
	}

	.custom-input:disabled {
		background-color: var(--grey);
		cursor: not-allowed;
	}

	.custom-input__field {
		font-size: 12px;
		font-weight: 400;
		padding: 14px 0 14px 14px;
		background-color: transparent;
		border: none;
		width: 100%;
	}

	.custom-input__field:focus {
		outline: none;
	}

	.custom-input__button {
		border: none;
		background-color: var(--purple);
		color: var(--white);
		border-radius: 4px;
		min-width: 36px;
		height: 36px;
		cursor: pointer;
	}
</style>
