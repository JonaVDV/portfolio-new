<script lang="ts">
	import Button from '$components/button/button.svelte';
	import Carousel from '$components/carousel/carousel.svelte';
	import Slide from '$components/carousel/slide.svelte';
	import Heading from '$components/heading/heading.svelte';
	import Wrapper from '$components/wrapper/wrapper.svelte';
	import { gsap, ScrollTrigger, scrollTimeline } from '$animations';
	import Hero from '$components/header/hero.svelte';
	import Header from '$components/header/header.svelte';
</script>

<Wrapper width="wide">
	<section class="section who-are-you">
		<div class="even-columns">
			<div class="flow">
				<Heading level={2}>Wie ben jij?!?</Heading>

				<p class="fs-600" style="--max-length: 60ch">
					Mijn naam is Jona, ik ben een front-end developer gebaseerd in Nederland. Ik heb een gote
					passie voor webdevelopment en ik ben altijd op zoek naar nieuwe features of manieren
					waarop ik problemen kan oplossen.
					<br />
					<br />
					Als je op zoek bent naar iemand die je kan helpen met het bouwen van een website of webapplicatie,
					zou ik graag met je in contact komen.
				</p>
				<div class="flex-group" style="--flex-gap: var(--size-4)">
					<Button variant="primary">Mijn projecten</Button>
					<Button href="/contact" variant="secondary">Contact</Button>
				</div>
			</div>
		</div>
	</section>
	<section class="section highlighed-projects">
		<div class="even-columns">
			<div class="flow">
				<Heading level={2}>Highlighted projects</Heading>
				<p class="fs-600 mx-auto" style="--max-length: 60ch">
					Here are some of the projects I'm most proud of. I've worked on a lot of projects in the
					past few years, but these are the ones that I think are the most interesting.
				</p>
			</div>
			<div class="">
				<Carousel controls>
					{#each Array(10) as _, i}
						<Slide>
							<img src="https://picsum.photos/800/400" alt="placeholder" width="100%" />
							<p class="slide-number">{i}</p>
						</Slide>
					{/each}
				</Carousel>
			</div>
		</div>
	</section>
</Wrapper>
