<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let active = false;
	let id = crypto.randomUUID();
	const context = getContext<Writable<string[]>>('slides');
	if (!context) throw new Error('Slide component must be used inside a Carousel component');

	context.update((slides) => [...slides, id]);

	// $: active = ($context.indexOf(id) === $context.indexOf($activeSlide));
</script>

<div class="slide" {id}>
	<slot></slot>
</div>

<!-- ... -->

<style>
	.slide {
		flex: 0 0 100%;
		scroll-snap-align: center;
		cursor: grab;
	}
</style>
