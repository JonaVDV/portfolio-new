<script lang="ts">
	import '$styles/main.scss';
	import type { LayoutData } from './$types';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import Header from '$components/header/header.svelte';
	import Hero from '$components/header/hero.svelte';
	import Footer from '$components/footer/footer.svelte';
	export let data: LayoutData;

</script>


<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
</svelte:head>
<Navigation></Navigation>
<Header>
	<svelte:fragment slot="navigation">
	</svelte:fragment>
	<svelte:fragment slot="hero">
		<Hero></Hero>
	</svelte:fragment>
</Header>
<main>
	<slot></slot>
</main>
<Footer>
	
</Footer>

<style lang="scss">
	main {
		display: grid;
		height: 100%;

	}
</style>
