<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: active = href === $page.url.pathname;
</script>

<li class="padding-inline-4 padding-block-1">
	<a {href} class="fw-bold fs-500" aria-current={active ? 'page' : undefined}>
		<slot></slot>
	</a>
</li>

<style lang="scss">
	li:has(a:is(:hover, :focus)) {
		background-color: $clr-secondary-400;
	}

	li {
		position: relative;
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
