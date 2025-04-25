<script>
	import TeamList from '$lib/components/team/TeamList.svelte';
</script>

<main>
	<TeamList
		team={[
			{
				id: 'member1',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/35d9/f447/a4f76a822c5bcedafb6ec3eede4e376d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BiUT1u1gidoCGvBLwvjfA5xahl1UJpaQMhWV4K9ZUl0dBKc7-5OfLJXWRabzbuoPuvfYaxEvmx2oxVyj1yDi4Vg3gk1~wiqrDeXiMNGaR9CeU81whX4ZVWnXk4rj2JSwpHt2rh6EAw2ArYumS--cIQ-w5pr7BB7VlokYgr9Y2yxMWkqMbdtFFj0d4cdf8OObkTuPIFUNlJGHdrjtunuWiRGsdYTlsxghmC2Hr8gebCjjyqjKI4Q3oZ-6mZk-LDqZNvq2RWwjU8tS3g5FinBYkULFetg1mGnMQYaxr1q~qvXfTZgIX737ZC-IiTzZgmNeLcbAnj6mEozpHSRIf1zwQg__',
				name: 'Aida Cave',
				position: 'Position'
			},
			{
				id: 'member2',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/2a8d/aabd/37e5df65ff1f4deb38032f76b97914d0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vs8zTGgWPudcwgAwjzayLVG7TaOaqFum93sshBF5QxGmEIuf6rCWltA3NThS-85pVml2UEBv4d8w9kQQng7bhD-7SC1il7btShleR8HTWYj3nWLgbLXfvckRtIB8ZtBxJivAM8ZN9T-rB11yeRJ~Ew4QEttsztuzFvGpXaWlcE4ztpEsFrDxYEYmCquRhuzi2EzpIUle5OlbDf5GReDNlI1qKIyhwK-JCntFxRoI3vCLTZKsWahApTKWvdBAdems9WAJm2OKjttwwPi1s8Dig1o-TG4GJeSsiKYwEVUcoDzOAeDbSIRPgIiPaWXwdG7mesXSIRuZ5-R2gsyHJj4Ovw__',
				name: 'Nick Carleton',
				position: 'Position'
			}
		]}
	/>
</main>
