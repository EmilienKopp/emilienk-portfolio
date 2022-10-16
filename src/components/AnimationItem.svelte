<script>
    import ClickFlipCard from "./ClickFlipCard.svelte";
    import DevIcon from "./DevIcon.svelte";
    import SimpleCard from "./SimpleCard.svelte";
    
    export let slots = 1;
    export let animationTitle = "";
    export let scale = 1;
    export let color;
    export let backColor = "red";
    export let padding = 0;
    export let tools = [];
    export let flippable = true;
</script>

<div class="h-80 w-72">
    {#if flippable}
    <ClickFlipCard {color}>
        <div slot="front" class="flex flex-col justify-center h-full w-full">
            
            <h1 class="font-extrabold text-lg">{animationTitle}</h1>
            <div class="absolute top-1 right-2 flex flex-row gap-1 z-50">
                {#if tools.length > 0}
                    {#each tools as tool}
                    <DevIcon {tool} />
                    {/each}
                {/if}
            </div>
            <div><slot name="modifiers"></slot></div>
            <div class="h-full w-full flex flex-col justify-center items-center">
                <slot name="animation"></slot>
            </div>
        </div>
        <div slot="back">
            <slot name="variants"></slot>
        </div>
    </ClickFlipCard>
    {:else}
    <SimpleCard {color}>
        <div class="flex flex-col h-full w-full">
            <h1 class="font-extrabold text-lg">{animationTitle}</h1>
            <div class="absolute top-1 right-2 flex h-10 flex-row gap-1 z-50">
                {#if tools.length > 0}
                    {#each tools as tool}
                    <DevIcon {tool} />
                    {/each}
                {/if}
            </div>
            <div><slot name="modifiers"></slot></div>
            <div class="h-full w-full place-self-center flex flex-col items-center">
                <div class="w-full h-full" style="{`transform:scale(${scale});`}"><slot name="animation"></slot></div>
                <div><slot name="output"></slot></div>
            </div>
        </div>
    </SimpleCard>
    {/if}

</div>

<style>

</style>