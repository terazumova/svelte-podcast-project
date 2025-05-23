<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Heart from '$lib/icons/Heart.svelte';
	import Search from '$lib/icons/Search.svelte';
</script>

<header class="header container">
	<a href="/">
		<img src="/logo.svg" alt="CastPress logo" class="logo" width="81" height="28" />
	</a>
	<nav>
		<ul class="header__nav">
			<li class="header__nav-link heading-6"><a href="/episodes">Episodes <ArrowDown /></a></li>
			<li class="header__nav-link heading-6">
				<a href="/blog">Blog</a>
			</li>
			<li class="header__nav-link heading-6">
				<a href="/contact">Contact</a>
			</li>
			<li class="header__nav-link header__nav-link_highlighted heading-6">
				<a href="/donate"><Heart /> Donate</a>
			</li>
			<li class="header__nav-link heading-6"><a href="/"><Search /></a></li>
		</ul>
	</nav>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 39px 150px;
		border-bottom: 1px solid var(--color-light-grey-1);
	}

	.header__nav {
		display: flex;
		align-items: center;
		list-style-type: none;
		list-style: none;
		gap: 39px;
	}

	.header__nav-link a {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-black);
		text-decoration: none;
		text-transform: uppercase;
	}

	.header__nav-link_highlighted a {
		color: var(--color-purple);
	}
</style>
