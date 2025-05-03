<script>
	import Episode from '$lib/components/latest-episodes/Episode.svelte';
</script>

<Episode
	{...{
		id: 'episode1',
		topic: 'Business',
		date: 'Jan 18, 2021',
		title: '23 - How to rapidly test any experience!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
		link: '/episodes/1'
	}}
/>
