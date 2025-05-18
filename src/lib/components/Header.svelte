<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Heart from '$lib/icons/Heart.svelte';
	import Search from '$lib/icons/Search.svelte';
</script>

<header class="header">
	<div class="container">
		<a href="/" rel="noopener noreferrer">
			<img src="/logo.svg" alt="Logo" class="logo" width="81" height="28" />
		</a>
		<nav>
			<ul class="navigation">
				<li class="navigation__link"><a href="/">Episodes <ArrowDown /></a></li>
				<li class="navigation__link">
					<a href="/blog" rel="noopener noreferrer">Blog</a>
				</li>
				<li class="navigation__link">
					<a href="/contact" rel="noopener noreferrer">Contact</a>
				</li>
				<li class="navigation__link navigation__link_highlighted">
					<a href="/donate" rel="noopener noreferrer"><Heart /> Donate</a>
				</li>
				<li class="navigation__link"><a href="/"><Search /></a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 39px 150px;
		border-bottom: 1px solid var(--color-light-grey-1);
	}

	.navigation {
		display: flex;
		align-items: center;
		list-style-type: none;
		list-style: none;
		gap: 39px;
	}

	.navigation__link a {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-black);
		text-decoration: none;
	}

	.navigation__link_highlighted a {
		color: var(--color-purple);
	}
</style>
