<script lang="ts">
	export let width: 'narrow' | 'wide' | 'full' | 'default';
</script>

<div class="wrapper" data-width={width}>
	<slot></slot>
</div>

<style lang="scss">
	/** i am using the wrapper name in case you want to use 
container queries
*/
	.wrapper {
		--wrapper-max-width: #{$wrapper-max-width};
		--wrapper-padding: #{$wrapper-padding};

		width: min(100% - var(--wrapper-padding), var(--wrapper-max-width));
		margin-inline: auto;

		[data-width='wide'] {
			--wrapper-max-width: #{$wrapper-wide-max-width};
		}

		[data-width='narrow'] {
			--wrapper-max-width: #{$wrapper-narrow-max-width};
		}

		[data-width='full'] {
			width: 100%;
		}
	}
</style>
