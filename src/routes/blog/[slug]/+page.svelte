<script lang="ts">
	import PostItem from '$lib/components/posts/PostItem.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<PostItem {...data.post} />
