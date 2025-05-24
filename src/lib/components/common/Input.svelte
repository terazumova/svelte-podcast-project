<script lang="ts">
	const { formData, errors, message, submitButton, id, name, placeholder } = $props();
</script>

<div class="input-block">
	<input class="input-block__input" {id} {name} {placeholder} bind:value={$formData.email} />
	{#if submitButton}
		{@render submitButton()}
	{/if}

	{#if $errors && $errors.email?.length}
		<p class="input-block__message error">
			{$errors.email[0]}
		</p>
	{/if}

	{#if $message}
		<p
			class="input-block__message"
			class:success={$message.status == 'success'}
			class:error={$message.status == 'error'}
		>
			{$message.text}
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

	.success {
		color: var(--color-green);
	}

	.error {
		color: var(--color-red);
	}
</style>
