<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export let level: $$Props['level'];
	interface $$Props extends HTMLAttributes<HTMLElement> {
		level: (1 | 2 | 3 | 4 | 5 | 6) | '1' | '2' | '3' | '4' | '5' | '6';
	}
</script>

<!-- 
	@component Heading
	@description A heading component that renders a heading element with the specified level
	@slot - Default slot for the content of the heading
	
 -->
<svelte:element
	this={`h${level}`}
	role="heading"
	aria-level={Number(level)}
	{...$$restProps}
	class="heading-{level} {$$restProps['class']}"
>
	<slot></slot>
</svelte:element>
