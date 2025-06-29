<script lang="ts">
	import { goto } from '$app/navigation';
	import Heart from '$lib/icons/Heart.svelte';
	import Dropdown from './Dropdown.svelte';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		episodes: EpisodeType[];
		onClose?: () => void;
	};

	let { episodes, onClose }: Props = $props();

	const handleEpisodesNavigation = (slug: string) => {
		onClose?.();

		if (slug === 'all') {
			goto('/episodes');
			return;
		}

		goto(`/episodes/${slug}`);
	};
</script>

<nav class="nav">
	<ul class="nav__list">
		<li>
			<Dropdown
				placeholder="Episodes"
				options={[
					...(episodes?.map((option) => ({ label: option.title, value: option.slug })) ?? []),
					{ label: 'View all', value: 'all' }
				]}
				handleChange={(option) => handleEpisodesNavigation(option.value)}
			/>
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
</style>
