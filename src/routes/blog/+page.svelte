<script>
	import PostList from '$lib/components/posts/PostList.svelte';
</script>

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
