<script lang="ts">
	import { page } from '$app/stores';
	import {gsap} from '$animations';

	export let href: string;

	$: active = href === $page.url.pathname;

	function animate(e: MouseEvent | FocusEvent) {
		const target = e.target as HTMLElement;
		
		// animate the pseudo element to slide a box with background in over the element with trailing effect
		
	}
</script>

<li class="padding-inline-4 padding-block-1">
	<a {href} class="fw-bold fs-500 flex-group" on:mouseover={animate} on:focus={animate} aria-current={active ? 'page' : undefined}>
		<slot></slot>
	</a>
</li>

<style lang="scss">
	li:has(a:is(:hover, :focus)) {
		isolation: isolate;

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			animation: forwards slideinout 0.4s ease-in-out;
			background-color: $clr-primary-400;
		}
	}

	li {
		position: relative;

		&::before {
			content: '';
			display: block;
			position: absolute;
			height: 100%;
			background-color: transparent;
			z-index: -1;
			inset: 0;
			transition: width 0.4s ease-in-out;
		}
	}

	@keyframes slideinout {
		0% {
			width: 0%;
		}
		50% {
			width: 100%;
		}
		100% {
			width: 0%;
		}
	}

	a[aria-current='page']::after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: -5px;
		left: 0;
		rotate: -3deg;
		background-color: $clr-primary-400;
	}
</style>
