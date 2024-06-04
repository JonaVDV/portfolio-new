<script lang="ts">
    import { Moon, Sun } from 'lucide-svelte';

    let checked: boolean = false;
</script>

<div class="theme-switch">
    <label for="theme-switch" class="theme-switch-label">
        <input type="checkbox" id="theme-switch" class="theme-switch-input" bind:checked />
        <span class="theme-switch-slider">
            {#if checked}
                <Sun size={16} />
            {:else}
                <Moon size={16} />
            {/if}
        </span>
    </label>
</div>

<style lang="scss">
    .theme-switch {
        padding: .5rem 2rem;
        border-radius: $border-radius-2;
        border: 1px solid $clr-neutral-900;
    }

    .theme-switch-slider {
        display: flex;
        align-items: center;
        background-color: $clr-neutral-900;
        aspect-ratio: 1;
        height: 0.5rem;
    }

    input[type='checkbox'] {
        display: none;
    }
</style>
