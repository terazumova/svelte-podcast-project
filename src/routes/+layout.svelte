<script lang="ts">
	import '@fontsource/source-serif-pro/400.css';
	import '@fontsource/source-serif-pro/600.css';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	type Props = {
		children: Snippet;
		data: PageData;
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
		max-width: 670px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 70px;
		padding-top: 64px;
	}
</style>
