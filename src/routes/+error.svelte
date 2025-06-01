<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="not-found">
	{#if page.status === 404}
		<p class="not-found__error">404</p>
		<h1 class="not-found__title">Page not found!</h1>
		<p class="not-found__description heading-4">
			This page not found (deleted or never exists). Try a phrase in search box or back to home and
			start again.
		</p>
	{:else if page.status === 500}
		<p class="not-found__error">500</p>
		<h1 class="not-found__title">Internal Server Error. Something went wrong on our end.</h1>
	{:else}
		<p class="not-found__error">{page.status}</p>
		{#if page.error?.message}
			<h1 class="not-found__title">{page.error.message}</h1>
		{/if}
	{/if}
	<a href="/">HOMEPAGE</a>
</div>

<style>
	.not-found {
		margin: 96px auto 64px auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.not-found__error {
		font-size: var(--fs-large);
		font-weight: var(--fw-semibold);
	}

	.not-found__description {
		margin: auto;
		max-width: 450px;
		color: var(--color-dark-grey);
	}
</style>
