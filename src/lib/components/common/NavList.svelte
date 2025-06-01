<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Heart from '$lib/icons/Heart.svelte';
</script>

<nav class="nav">
	<ul class="nav__list">
		<li><a class="nav__link heading-6" href="/episodes">Episodes <ArrowDown /></a></li>
		<li>
			<a class="nav__link heading-6" href="/blog">Blog</a>
		</li>
		<li>
			<a class="nav__link heading-6" href="/contact">Contact</a>
		</li>
		<li>
			<a class="nav__link nav__donate-link heading-6" href="/donate"><Heart /> Donate</a>
		</li>
	</ul>
</nav>

<style>
	.nav__list {
		display: flex;
		align-items: center;
		list-style-type: none;
		list-style: none;
		gap: 39px;
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
