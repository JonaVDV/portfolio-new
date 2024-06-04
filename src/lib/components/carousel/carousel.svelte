<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	const slides = writable<string[]>([]);

	export let controls = false;
	let activeSlide = $slides[0];
	$: slideContainer = null as HTMLElement | null;

	$: console.log(activeSlide);

	function scrollableCarousel<T extends HTMLElement>(element: T) {
		element.addEventListener('wheel', (event) => {
			if (element.scrollLeft % element.clientWidth === 0) {
				let currentIndex = Math.floor(element.scrollLeft / element.clientWidth);
				activeSlide = $slides[currentIndex];
			}
		});
	}

	function nextSlide() {
		if (slideContainer) {
			let currentIndex = $slides.indexOf(activeSlide);
			if (currentIndex < $slides.length - 1) {
				slideContainer.scrollLeft = slideContainer.clientWidth * (currentIndex + 1);
			}
		}
	}

	function prevSlide() {
		if (slideContainer) {
			let currentIndex = $slides.indexOf(activeSlide);
			if (currentIndex > 0) {
				slideContainer.scrollLeft = slideContainer.clientWidth * (currentIndex - 1);
			}
		}
	}

	setContext('slides', slides);
</script>

<div class="carousel wrapper">
	{#if controls}
		<div class="controls flex-group space-between">
			<a class="prev" href="javascript:void(0)" on:click|preventDefault={prevSlide}>
				<!-- svg for chevron left -->
				<!-- ... -->
			</a>
			<a class="next" href="javascript:void(0)" on:click|preventDefault={nextSlide}>
				<!-- svg for chevron right -->
				<!-- ... -->
			</a>
		</div>
	{/if}

	<div class="slides" use:scrollableCarousel>
		<slot></slot>
	</div>
</div>

<!-- ... -->

<style lang="scss">
	.carousel {
		position: relative;
	}

	.slides {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
	}
</style>
