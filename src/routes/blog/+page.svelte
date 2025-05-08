<script lang="ts">
	import PostList from '$lib/components/posts/PostList.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<PostList posts={data.posts} />
