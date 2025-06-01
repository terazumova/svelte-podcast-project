<script lang="ts">
	import NavList from './common/NavList.svelte';
	import Search from '$lib/icons/Search.svelte';
</script>

<header class="header container">
	<a href="/">
		<img src="/logo.svg" alt="CastPress logo" class="logo" width="81" height="28" />
	</a>
	<div class="header__links">
		<NavList />
		<Search />
	</div>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 39px 150px;
		border-bottom: 1px solid var(--color-light-grey-1);
	}

	.header__links {
		display: flex;
		align-items: center;
		gap: 39px;
	}

	.header :global(.nav__donate-link) {
		color: var(--color-purple);
	}
</style>
