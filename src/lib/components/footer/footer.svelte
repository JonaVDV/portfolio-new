<script lang="ts">
	import Heading from "$components/heading/heading.svelte";

</script>

<footer class="primary-footer">
    <div class="footer-inner">
        <nav>
            <Heading level={3} class="footer-title">
                Site Map
            </Heading>
            <ul class="margin-block-start-3 flow" style="--flow-spacer: .25em">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about-me">About Me</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
        <hr class="">
        <div>

            <p>&copy; copyright Jona van der Vlist 2024-present </p>
            <p>
                Built with <a href="https://kit.svelte.dev/" target="_blank" rel="noopener">Sveltekit</a> and <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>
            </p>
        </div>
    </div>
</footer>

<style lang="scss">
	.primary-footer {
		background-color: $footer-background-color;
		padding: $footer-padding;
        border-top: 1px solid $clr-neutral-900;

		a {
			color: $footer-link-color;
			text-decoration: $footer-link-text-decoration;
            font-size: $fs-500;

			&:is(:hover, :focus) {
				color: $footer-link-color-hover;
			}
		}
	}
</style>
