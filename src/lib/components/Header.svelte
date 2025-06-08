<script lang="ts">
	import NavList from './common/NavList.svelte';
	import Search from '$lib/icons/Search.svelte';
	import Menu from '$lib/icons/Menu.svelte';
	import Sidebar from './Sidebar.svelte';
	import Close from '$lib/icons/Close.svelte';

	let isSidebarVisible = $state(false);
</script>

<header class="header container">
	<a href="/">
		<img src="/logo.svg" alt="CastPress logo" class="logo" width="81" height="28" />
	</a>
	<div class="header__links">
		<NavList />
		<Search />
	</div>
	<button class="header__menu-button" onclick={() => (isSidebarVisible = !isSidebarVisible)}
		>{#if isSidebarVisible}
			<Close />
		{:else}
			<Menu />
		{/if}
	</button>
</header>
{#if isSidebarVisible}
	<Sidebar />
{/if}

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		height: 76px;
		border-bottom: 1px solid var(--color-light-grey-1);
	}

	.header__links {
		display: none;
		align-items: center;
		gap: 39px;
	}

	.header :global(.nav__donate-link) {
		color: var(--color-purple);
	}

	.header__menu-button {
		border: none;
		background-color: transparent;
	}

	@media (min-width: 1024px) {
		.header {
			padding: 0 150px;
			height: 106px;
		}

		.header__links {
			display: flex;
		}

		.header__menu-button {
			display: none;
		}
	}
</style>
