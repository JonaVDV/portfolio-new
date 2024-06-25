<script lang="ts">
	import ThemeSwitch from '$components/theme-switch/theme-switch.svelte';
	import Wrapper from '$components/wrapper/wrapper.svelte';
	import { Linkedin, X } from 'lucide-svelte';
	import NavigationItem from './navigation-item.svelte';
	import { writable } from 'svelte/store';

	const navigationOpen = writable(false);
</script>

<div class="navigation-wrapper" data-open={$navigationOpen}>
	<Wrapper width="wide">
		<nav class="padding-block-6 flex-group space-between">
			<ul class="nav flex-group" style="--flex-gap: 2rem" role="list">
				<NavigationItem href="/">Home</NavigationItem>
				<NavigationItem href="/about-me">About Me</NavigationItem>
				<NavigationItem href="/projects">Projects</NavigationItem>
				<NavigationItem href="/contact">Contact</NavigationItem>
			</ul>
			<div class="social">
				<ul role="list" class="flex-group" style="--flex-gap: var(--size-2)">
					<li>
						<a href="https://www.linkedin.com/in/jona-van-der-vlist-8527a5234" target="blank">
							<Linkedin />
						</a>
						<a href="https://github.com/JonaVDV" target="_blank">
							<svg
								role="img"
								width="24"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><title>GitHub</title><path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/></svg
							>
						</a>
					</li>
				</ul>
			</div>
			{#if $navigationOpen}
				<button class="navigation-close" on:click={() => ($navigationOpen = false)}>
					<X size="24" />
				</button>
			{/if}
		</nav>
	</Wrapper>
</div>

<style lang="scss">
	.navigation-wrapper {
		border-bottom: 1px solid $clr-neutral-900;
		background-color: $clr-neutral-000;
		position: sticky;
		z-index: 9999;
		isolation: isolate;
		top: 0;

		@include mq-max(small) {
			position: fixed;
			inset: 0 0 0 0;
			padding: $size-8 $size-4;
			translate: -100%;
			transition: transform 300ms ease-in-out;
			&[data-open='true'] {
				translate: 0%;
			}
		}

		@include container('navigation');

		:global(.wrapper) {
			height: 100%;
		}
	}

	nav {
		@include cq-max(40em, navigation) {
			flex-direction: column;
			text-align: start;
			position: relative;
			align-items: start;
			height: 100%;
		}
	}
	.social {
		margin-block-start: auto;
		a {
			color: $clr-neutral-900;
			text-decoration: $navigation-link-text-decoration;
			transition: color 300ms ease-in-out;
			&:hover {
				color: $clr-primary-400;
			}
		}
	}
	.nav {
		align-items: center;

		@include cq-max(40em, navigation) {
			display: grid;
		}

		a {
			color: $navigation-link-color;
			text-decoration: $navigation-link-text-decoration;
			transition: color 300ms ease-in-out;

			&:hover {
				color: $navigation-link-hover-color;
			}
		}
	}

	.navigation-close {
		appearance: none;
		border: 0;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		background-color: transparent;
		aspect-ratio: 1/1;
		color: $clr-neutral-900;
	}
</style>
