<script lang="ts">
	import Heart from '$lib/icons/Heart.svelte';
	import type { EpisodeType } from '$lib/types';
	import ArrowDown from '$lib/icons/ArrowDown.svelte';

	type Props = {
		episodes: EpisodeType[];
		onClose?: () => void;
	};

	let { episodes, onClose }: Props = $props();
</script>

<nav class="nav">
	<ul class="nav__list">
		<li class="episodes">
			<p class="episodes__label heading-6">
				Episodes
				<ArrowDown />
			</p>
			<ul class="episodes__list">
				{#each episodes as option}
					<li>
						<a
							class="episodes__option"
							href={`/episodes/${option.slug}`}
							aria-label="go to episode"
							onclick={onClose}>{option.title}</a
						>
					</li>
				{/each}
				<li class="episodes__option">
					<a class="episodes__option" href="/episodes" aria-label="go to episode" onclick={onClose}
						>View all</a
					>
				</li>
			</ul>
		</li>
		<li>
			<a class="nav__link heading-6" href="/blog" onclick={onClose}>Blog</a>
		</li>
		<li>
			<a class="nav__link heading-6" href="/contact" onclick={onClose}>Contact</a>
		</li>
		<li>
			<a class="nav__link nav__donate-link heading-6" href="/donate" onclick={onClose}
				><Heart /> Donate</a
			>
		</li>
	</ul>
</nav>

<style>
	.nav__list {
		display: flex;
		align-items: center;
		gap: 39px;
		list-style-type: none;
		list-style: none;
		text-transform: uppercase;
	}

	:global(.nav__link) {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-black);
		text-decoration: none;
	}

	.episodes {
		position: relative;
	}

	.episodes:hover .episodes__list {
		display: flex;
		flex-direction: column;
	}

	.episodes__label {
		display: flex;
		align-items: center;
		gap: 4px;
		cursor: pointer;
	}

	.episodes__list {
		display: none;
		position: absolute;
		z-index: 1;
		border: 1px solid var(--color-light-grey-1);
		background-color: var(--color-white);
		padding: 8px 0;
		min-width: 200px;
	}

	.episodes__option {
		display: block;
		cursor: pointer;
		padding: 8px 16px;
		color: var(--color-black);
		text-transform: none;
	}

	.episodes__option:hover {
		background-color: var(--color-light-grey-3);
	}
</style>
