<script lang="ts">
	import { fly } from 'svelte/transition';
	import NavList from './common/NavList.svelte';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		episodes: EpisodeType[];
		onClose: () => void;
	};

	let { episodes, onClose }: Props = $props();
</script>

<div class="sidebar-panel" transition:fly={{ x: 300, duration: 300 }}>
	<NavList {episodes} onClose={onClose} />
</div>

<style>
	.sidebar-panel {
		display: flex;
		position: fixed;
		top: 76px;
		left: 0;
		flex-direction: column;
		z-index: 20;
		background: var(--color-white);
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}

	.sidebar-panel :global(.nav__list) {
		flex-direction: column;
		align-items: center;
		gap: 39px;
		padding-top: 45px;
	}
</style>
