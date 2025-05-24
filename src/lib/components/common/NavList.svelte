<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Heart from '$lib/icons/Heart.svelte';
	import Search from '$lib/icons/Search.svelte';

	const { isHeader } = $props();
</script>

<nav>
	<ul class="nav-list" class:nav-list_vertical={!isHeader}>
		<li><a class="nav-list__link heading-6" href="/episodes">Episodes <ArrowDown /></a></li>
		<li>
			<a class="nav-list__link heading-6" href="/blog">Blog</a>
		</li>
		<li>
			<a class="nav-list__link heading-6" href="/contact">Contact</a>
		</li>
		<li>
			<a class="nav-list__link heading-6" class:nav-list__link_highlighted={isHeader} href="/donate"
				>{#if isHeader}<Heart />{/if} Donate</a
			>
		</li>
		{#if isHeader}
			<li><a class="nav-list__link heading-6" href="/"><Search /></a></li>
		{/if}
	</ul>
</nav>

<style>
	.nav-list {
		display: flex;
		align-items: center;
		list-style-type: none;
		list-style: none;
		gap: 39px;
		text-transform: uppercase;
	}

	.nav-list_vertical {
		flex-direction: column;
		align-items: start;
		gap: 9px;
		text-transform: none;
	}

	.nav-list__link {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-black);
		text-decoration: none;
	}

	.nav-list__link_highlighted {
		color: var(--color-purple);
	}
</style>
