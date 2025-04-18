<script>
	import MainBlock from '$lib/components/MainBlock.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';
	import TeamList from '$lib/components/team/TeamList.svelte';
</script>

<main>
	<MainBlock />
	<PostList
		posts={[
			{
				id: 'post1',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/088a/e9b1/4ef475a84c670faf431bc283e7568079?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eL9GVf0hrKqMEFUjO8FdQuODMYzwB3fdINX-M-EjN2pSn~CI-0xfn0UT3G9fqdYCAN70j95R3NZnPmAQVFytJw-vaZw~douUd6YyBR9IIvbIdmMcoEq0aRpGpRiCUIqhfduQ0iiVb73VbyPfwtOBHtrR5E5jfpRgIISDy~3Y4Z-8eTXGoOKX4hM8Y1qkfqa2bjy-~ctj~rVKj4QYGm9UJmFkJRpy6VK0M-ymFxbSU4oDgizxqyM9dnCLMGscWhuEy6VDwvyaocl0QwQAh16D24giVtQwgm945kh0RplhN-gakuvm~3AdPGQlCOijuIDtGklmrx84pzGkwNU~dJwzlg__',
				title: 'How to create your own podcast cover art?',
				date: 'Dec 4, 2019',
				link: '/posts/1'
			},
			{
				id: 'post2',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/464f/9fcd/c404066327e4b13577cfc20febca34f0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qKLDB00CbL70sj-QmJdId-b2NawdOqX03QuQR32i7NPQBLG~K6zLvlwCv1PYztgHVNOzcw9KZwdiTXsx9066CUv0iFejaYI35IXojYBlZkzD35lAl79LuBKWfW6SEfp-WjHY0-vU824XCJvK30i5e4EH6B5IOLsIv7g4B9y2fMAe2fnICxnzOwuHAxuUgl90Q7o3C0YZKHD0U~NiCN4FuXwzEofCrM4d3ljBn9tD1ZPsbhS-yPyhgMIoB9KmcysXxCJQCnq9ijD-wy12vrYuCmNxmWGcEaHou~Iubqy~vksRfvWcXpVwqbeuxlvbXE0fAmmtoOd9VeU8oWjyMWEsQw__',
				title: 'How to create your own podcast cover art?',
				date: 'Dec 4, 2019',
				link: '/posts/2'
			}
		]}
	/>
	<TeamList
		team={[
			{
				id: 'member1',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/35d9/f447/a4f76a822c5bcedafb6ec3eede4e376d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BiUT1u1gidoCGvBLwvjfA5xahl1UJpaQMhWV4K9ZUl0dBKc7-5OfLJXWRabzbuoPuvfYaxEvmx2oxVyj1yDi4Vg3gk1~wiqrDeXiMNGaR9CeU81whX4ZVWnXk4rj2JSwpHt2rh6EAw2ArYumS--cIQ-w5pr7BB7VlokYgr9Y2yxMWkqMbdtFFj0d4cdf8OObkTuPIFUNlJGHdrjtunuWiRGsdYTlsxghmC2Hr8gebCjjyqjKI4Q3oZ-6mZk-LDqZNvq2RWwjU8tS3g5FinBYkULFetg1mGnMQYaxr1q~qvXfTZgIX737ZC-IiTzZgmNeLcbAnj6mEozpHSRIf1zwQg__',
				name: 'Aida Cave',
				position: 'Position',
			},
			{
				id: 'member2',
				imageUrl:
					'https://s3-alpha-sig.figma.com/img/2a8d/aabd/37e5df65ff1f4deb38032f76b97914d0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vs8zTGgWPudcwgAwjzayLVG7TaOaqFum93sshBF5QxGmEIuf6rCWltA3NThS-85pVml2UEBv4d8w9kQQng7bhD-7SC1il7btShleR8HTWYj3nWLgbLXfvckRtIB8ZtBxJivAM8ZN9T-rB11yeRJ~Ew4QEttsztuzFvGpXaWlcE4ztpEsFrDxYEYmCquRhuzi2EzpIUle5OlbDf5GReDNlI1qKIyhwK-JCntFxRoI3vCLTZKsWahApTKWvdBAdems9WAJm2OKjttwwPi1s8Dig1o-TG4GJeSsiKYwEVUcoDzOAeDbSIRPgIiPaWXwdG7mesXSIRuZ5-R2gsyHJj4Ovw__',
				name: 'Nick Carleton',
				position: 'Position',
			}
		]}
	/>
</main>
