<script lang="ts">
	import Heading from '$components/heading/heading.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="section">
	<div class="wrapper" data-width="wide">
		<div class="placeholder-img">
			<Heading level="3">

				placeholder (image)
			</Heading>
		</div>
	</div>
</div>

<style>
	.placeholder-img {
		width: 20rem;
		display: grid;
		color: black !important;
		place-content: center;
		aspect-ratio: 1 / 1;
		background-color: #4b4040;
		border-radius: 50%;
		margin-inline: auto 0;
	}
</style>
