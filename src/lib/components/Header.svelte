<script lang="ts">
	import NavList from './common/NavList.svelte';
</script>

<header class="header container">
	<a href="/">
		<img src="/logo.svg" alt="CastPress logo" class="logo" width="81" height="28" />
	</a>
	<NavList isHeader={true} />
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 39px 150px;
		border-bottom: 1px solid var(--color-light-grey-1);
	}
</style>
