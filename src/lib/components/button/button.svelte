<script lang="ts">
	export let href: string | undefined = undefined;
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

{#if href}
	<a {href} class="button" data-button-type={variant}>
		<slot></slot>
	</a>
{:else}
	<button class="button" data-button-type={variant}>
		<slot></slot>
	</button>
{/if}

<style lang="scss">
	.button {
		display: inline-flex;
		justify-content: center;
		line-height: 1;
		cursor: pointer;
		appearance: none;
		padding: $button-padding;
		border-radius: $button-border-radius;
		// border: $button-border;
		border: 0;
		font-size: $button-font-size;
		font-weight: $button-font-weight;
		transition:
			color,
			background-color 0.4s ease-in-out;

		&[data-button-type='primary'] {
			background-color: $button-primary-background-color;
			color: $button-primary-color;

			&:is(:hover, :focus) {
				background-color: $button-primary-background-color-hover;
				color: $button-primary-color-hover;
			}
		}
	}
</style>
