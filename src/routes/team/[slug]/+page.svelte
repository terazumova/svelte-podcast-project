<script>
	import TeamMember from '$lib/components/team/TeamMember.svelte';
</script>

<main class="team">
	<TeamMember
		{...{
			id: 'member1',
			imageUrl:
				'https://s3-alpha-sig.figma.com/img/35d9/f447/a4f76a822c5bcedafb6ec3eede4e376d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BiUT1u1gidoCGvBLwvjfA5xahl1UJpaQMhWV4K9ZUl0dBKc7-5OfLJXWRabzbuoPuvfYaxEvmx2oxVyj1yDi4Vg3gk1~wiqrDeXiMNGaR9CeU81whX4ZVWnXk4rj2JSwpHt2rh6EAw2ArYumS--cIQ-w5pr7BB7VlokYgr9Y2yxMWkqMbdtFFj0d4cdf8OObkTuPIFUNlJGHdrjtunuWiRGsdYTlsxghmC2Hr8gebCjjyqjKI4Q3oZ-6mZk-LDqZNvq2RWwjU8tS3g5FinBYkULFetg1mGnMQYaxr1q~qvXfTZgIX737ZC-IiTzZgmNeLcbAnj6mEozpHSRIf1zwQg__',
			name: 'Aida Cave',
			position: 'Position'
		}}
	/>
</main>

<style>
	.team {
		max-width: 670px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 70px;
		padding-top: 64px;
	}
</style>
