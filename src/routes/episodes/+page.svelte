<script>
	import EpisodesList from '$lib/components/latest-episodes/EpisodesList.svelte';
</script>

<main>
	<EpisodesList
		episodes={[
			{
				id: 'episode1',
				topic: 'Business',
				date: 'Jan 18, 2021',
				title: '23 - How to rapidly test any experience!',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
				link: '/episodes/1'
			},
			{
				id: 'episode2',
				topic: 'Business',
				date: 'Jan 18, 2021',
				title: '22 - Everything you need to know about mind mapping creation',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
				link: '/episodes/2'
			},
			{
				id: 'episode3',
				topic: 'Business',
				date: 'Jan 18, 2021',
				title: '21 - Makemeup Podcast Theme; launch it now !  ',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit...',
				link: '/episodes/1'
			}
		]}
	/>
</main>
