<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	type Props = {
		children: Snippet;
		data: LayoutData;
	};

	let { children, data }: Props = $props();
</script>

<Header />
<main class="container">
	{@render children()}
</main>
<Footer form={data.form} />

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 64px;
		padding: 24px 16px;
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 670px;
			gap: 70px;
			padding: 64px 0;
		}
	}
</style>
