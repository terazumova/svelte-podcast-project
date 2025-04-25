<script lang="ts">
	import CustomInput from '$lib/components/common/CustomInput.svelte';
	import Facebook from '$lib/icons/social/Facebook.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
</script>

<footer class="footer">
	<div class="container">
		<ul class="navigation">
			<li class="navigation__link">
				<a href="/episodes" rel="noopener noreferrer">Episodes</a>
			</li>
			<li class="navigation__link">
				<a href="/blog" rel="noopener noreferrer">Blog</a>
			</li>
			<li class="navigation__link">
				<a href="/contact" rel="noopener noreferrer">Contact</a>
			</li>
			<li class="navigation__link">
				<a href="/donate" rel="noopener noreferrer">Donate</a>
			</li>
		</ul>
		<form class="newsletter">
			<p class="newsletter__title">Newsletter</p>
			<p class="newsletter__description">Sign up now; get closer to our action.</p>
			<CustomInput type="email" placeholder="Email  adress..." />
		</form>
	</div>
	<ul class="social">
		<Facebook class="social__button" />
		<Github class="social__button" />
		<Twitter class="social__button" />
	</ul>
</footer>

<style>
	.footer {
		max-width: 670px;
		margin: auto;
		padding: 64px 0 39px 0;
	}

	.container {
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding: 64px 0 89px;
		border-top: 1px solid var(--light-grey-1);
	}

	.navigation {
		display: flex;
		flex-direction: column;
		align-items: start;
		list-style-type: none;
		list-style: none;
		gap: 9px;
	}

	.navigation__link a {
		color: var(--black);
		text-decoration: none;
	}

	.newsletter {
		min-width: 375px;
	}

	.newsletter__title {
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 16%;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.newsletter__description {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 14px;
	}

	.social {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	:global(.social__button) {
		cursor: pointer;
	}
</style>
