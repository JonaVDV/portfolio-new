<script lang='ts'>
	import Button from "$components/button/button.svelte";
import Heading from "$components/heading/heading.svelte";
import Wrapper from "$components/wrapper/wrapper.svelte";

    
</script>


<Wrapper width='wide'>
    <section class="section who-are-you">
        <div class="even-columns">

            <div class="flow">
                <Heading level={2}>
                    Who are you?
                </Heading>
                
                <p class="fs-600" style="--max-length: 60ch">
                    I'm Jona, a software engineer from the Netherlands. I'm very passionate about web development. 
                    and usually stay up late to work on my projects.
                    I have leanrt a lot of things in the past few years and it seems to never be enough. 
                    I'm always looking for new things, new technologies and new ways to improve my skills. 
                </p>
                <div class="flex-group" style="--flex-gap: var(--size-4)">
                    <Button variant="primary">
                        Chech out my projects
                    </Button> 
                    <Button variant="secondary">
                        Contact me
                    </Button>
                </div>
            </div>
    </section>
    <section class="section highlighed-projects">
        <div class="even-columns">
            <div class="flow text-center">
                <Heading level={2}>
                    Highlighted projects
                </Heading>
                <p class="fs-600 mx-auto" style="--max-length: 60ch">
                    Here are some of the projects I'm most proud of. 
                    I've worked on a lot of projects in the past few years, but these are the ones that I think are the most interesting.
                </p>
            </div>
        </div>
    </section>
</Wrapper>