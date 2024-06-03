<script lang="ts">
	import Wrapper from "$components/wrapper/wrapper.svelte";
	import NavigationItem from "./navigation-item.svelte";

</script>
<div class="navigation-wrapper">

    <Wrapper width='wide'>
        <nav class="padding-block-6 ">
            <ul class="nav flex-group" style="--flex-gap: 2rem" role="list">
                <NavigationItem href="/">
                    Home
                </NavigationItem>
                <NavigationItem href="/about-me">
                    About Me
                </NavigationItem>
                <NavigationItem href="/projects">
                    Projects
                </NavigationItem>
                <NavigationItem href="/contact">
                    Contact
                </NavigationItem>
            </ul>
        </nav>
    </Wrapper>
</div>
    
<style lang="scss">
    .navigation-wrapper {
        border-bottom: 1px solid $clr-neutral-900;
        position: sticky;
        top: 0;
    }


	.nav {
		align-items: center;

		a {
			color: $navigation-link-color;
			text-decoration: $navigation-link-text-decoration;
			transition: color 300ms ease-in-out;

			&:hover {
				color: $navigation-link-hover-color;
			}
		}
	}
</style>
