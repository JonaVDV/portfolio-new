<script lang="ts">
</script>

<header class="site-header">
    <div class="site-header--inner">
        <slot name="navigation"/>
    </div>
    <slot name="hero"/>
</header>

<style lang="scss">
	.site-header {
		background-color: $header-background-color;
		padding-block: $header-padding-block;
		&--inner {
			display: flex;
			gap: $size-4;
			align-items: center;
			@include mq(small) {
				justify-content: $header-inner-justify-content;
			}
		}
	}
</style>
