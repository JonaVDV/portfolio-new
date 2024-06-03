<script lang='ts'>
	import Heading from "$components/heading/heading.svelte";

    
</script>

<div class="hero overlay">
    <div class="hero-image">
        <!-- <img src="https://picsum.photos/id/1/1920/600" alt="Hero"> -->
    </div>
    <div class="hero-content">
        <Heading class="text-center" level={1}>
            Hi, I'm Jona
        </Heading>
        <p class="fs-600 text-center">
            welcome to my personal website
        </p>
    </div>
</div>

<style lang="scss">
    .hero   {
        background-image: url(https://picsum.photos/id/1/1920/600);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        min-block-size: 80svh;
        display: grid;
        place-content: center;
    }

    .overlay{
        border-image-source: linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
        border-image-slice: fill 1;
    }
</style>