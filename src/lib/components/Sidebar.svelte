<script>
	import { fly } from 'svelte/transition';
	import NavList from './common/NavList.svelte';
</script>

<svelte:window on:wheel|nonpassive={(e) => e.preventDefault()} />
<aside class="sidebar-panel" transition:fly={{ y: -300, duration: 300 }}>
	<NavList />
</aside>

<style>
	.sidebar-panel {
		position: fixed;
		top: 76px;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-white);
		z-index: 20;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.sidebar-panel :global(.nav__list) {
		padding-top: 45px;
		flex-direction: column;
		align-items: center;
		gap: 39px;
	}
</style>
