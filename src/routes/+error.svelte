<div class="not-found">
	<p class="not-found__error">404</p>
	<h1 class="not-found__title">Page not found!</h1>
	<p class="not-found__description">
		This page not found (deleted or never exists). Try a phrase in search box or back to home and
		start again.
	</p>
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
		font-size: 144px;
		font-weight: 600;
	}

	.not-found__description {
        margin: auto;
		max-width: 450px;
		color: var(--color-dark-grey);
		font-size: 16px;
		font-weight: 400;
	}
</style>
