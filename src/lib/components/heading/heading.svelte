<script lang='ts'>
	import type { HTMLAttributes } from "svelte/elements";

    export let level: $$Props['level'];
    interface $$Props extends HTMLAttributes<HTMLElement> {
        level: 1 | 2 | 3 | 4 | 5 | 6;
    }
</script>

<svelte:element this="{`h${level}`}" {...$$restProps} class="heading-{level} {$$restProps['class']}" >
    <slot></slot>
</svelte:element>