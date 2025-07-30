<script lang="ts">
	import NavList from '$lib/components/common/NavList.svelte';
	import Search from '$lib/icons/Search.svelte';
	import type { EpisodeType } from '$lib/types';
	import { lockscroll } from '@svelte-put/lockscroll';

	type Props = {
		episodes: EpisodeType[];
	};

	let { episodes }: Props = $props();

	let isMenuVisible = $state(false);

	const toggleMenu = () => {
		isMenuVisible = !isMenuVisible;
	};
</script>

<svelte:body use:lockscroll={isMenuVisible} />

<header class="header container">
	<a href="#main-content" class="skip-link"> Skip to main content </a>
	<div class="header__container">
		<a href="/">
			<img src="/logo.svg" alt="CastPress logo" class="logo" width="81" height="28" />
		</a>
		<button class="header__menu-button" onclick={toggleMenu} aria-label="toggle main menu">
			<div class="header__icon" class:header__icon--close={isMenuVisible}></div>
		</button>
	</div>
	<div class="header__menu" class:header__menu--visible={isMenuVisible}>
		<NavList {episodes} onClose={() => (isMenuVisible = false)} />
		<a href="/search"><Search /></a>
	</div>
</header>

<style>
	.skip-link {
		position: absolute;
		top: auto;
		left: -999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.skip-link:focus-visible {
		top: 0;
		left: 0;
		background-color: var(--color-purple);
		padding: 4px 8px;
		width: auto;
		height: auto;
		overflow: visible;
		color: var(--color-white);
	}

	.header {
		border-bottom: 1px solid var(--color-light-grey-1);
		width: 100%;
	}

	.header__container {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		z-index: 99;
		background-color: var(--color-white);
		padding: 0 16px;
		height: 76px;
	}

	.header__menu {
		display: flex;
		position: fixed;
		top: -100vh;
		left: 0;
		flex-direction: column;
		align-items: center;
		gap: 39px;
		z-index: 20;
		transition: top 0.3s ease-in-out;
		background: var(--color-white);
		width: 100%;
		height: calc(100vh - 76px);
	}

	.header__menu--visible {
		top: 76px;
	}

	.header__menu :global(.nav__list) {
		flex-direction: column;
		align-items: center;
		gap: 39px;
		padding-top: 45px;
	}

	.header :global(.nav__donate-link) {
		color: var(--color-purple);
	}

	.header__menu-button {
		border: none;
		background-color: transparent;
	}

	.header__icon {
		position: relative;
		width: 32px;
		height: 32px;

		&::before {
			position: absolute;
			top: 7px;
			left: 50%;
			translate: -50% 0;
			rotate: 0;
			transition:
				rotate 0.3s,
				top 0.3s 0.3s;
			background-color: var(--color-black);
			width: 25px;
			height: 1px;
			content: '';
		}

		&::after {
			position: absolute;
			bottom: 7px;
			left: 50%;
			translate: -50% 0;
			rotate: 0;
			transition:
				rotate 0.3s,
				bottom 0.3s 0.3s;
			background-color: var(--color-black);
			width: 25px;
			height: 1px;
			content: '';
		}
	}

	.header__icon--close {
		&::before {
			top: 50%;
			rotate: 45deg;
			transition:
				top 0.3s,
				rotate 0.3s 0.3s;
		}

		&::after {
			bottom: 50%;
			rotate: -45deg;
			transition:
				bottom 0.3s,
				rotate 0.3s 0.3s;
		}
	}

	@media (min-width: 1024px) {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 150px;
			height: 106px;
		}

		.header__menu {
			display: flex;
			position: relative;
			top: 0;
			flex-direction: row;
			width: auto;
			height: fit-content;
		}

		.header__menu-button {
			display: none;
		}

		.header__menu :global(.nav__list) {
			flex-direction: row;
			align-items: center;
			gap: 39px;
			padding-top: 0;
		}
	}
</style>
