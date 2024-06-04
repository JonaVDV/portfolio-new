<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    export let active = false;
    let id = crypto.randomUUID();
    const context = getContext<Writable<string[]>>('slides')
    $context = [...$context, id]
    
    // $: active = ($context.indexOf(id) === $context.indexOf($activeSlide));
</script>
<div class="slide" id="{id}">
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