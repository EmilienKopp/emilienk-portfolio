<script>
    import { onMount } from "svelte";

    export let controls = false;
    export let animate = true;

    let scale = 1;
    let mainBoxColor = `#FFFFFF`;
    let circleColor = `#FFC800`;
    let mainBox;
    let baseWidth;
    let baseHeight;
    let width;
    let height;
    let animationPlayState = "animation-play-state: paused;";

    onMount( () => {
        baseWidth = mainBox.getBoundingClientRect().width;
        baseHeight = mainBox.getBoundingClientRect().height;
    });

    $: {
        width = Math.floor(baseWidth * scale);
        height = Math.floor(baseHeight * scale);
        animationPlayState = `animation-play-state: ${animate ? "running" : "paused"};`;
    }
</script>

<div class="h-full w-full flex flex-col items-center">
    <div class="scaler" style={`transform: scale(${scale})`}>
        <div class="main-box" style={`background-color: ${mainBoxColor}; ${animationPlayState}`} bind:this={mainBox}>
            <div class="circle" style={`background-color: ${circleColor}; ${animationPlayState}`}>
            </div>
        </div>
    </div>
    {#if controls}
    <div class="controls pt-1 grid grid-cols-5 gap-3 text-md w-full">
        <input type="checkbox" bind:checked={animate} class="col-span-1"/> <label class="col-span-1 text-sm">{animate ? "Pause" : "Play"}</label>
        <span class="col-span-3 text-xs text-center">w: <span class="font-semibold text-md text-red-300">{width}</span> px | h: <span class="font-semibold text-md text-red-300">{height}</span> px</span>

        <input id="scale-input" class="col-span-3" type="range" min="0.2" max="2" step="0.05" bind:value={scale} /><label for="bpm-input" class="mx-2 col-span-2 place-self-center"> x {scale}</label>
       
        <label for="mainColor-input" class="mx-2 col-span-3 text-center  text-sm">Wheel color</label>
        <input id="mainColor-input" class="rounded-md col-span-2 place-self-center h-6" type="color" bind:value={mainBoxColor} />

        <label for="mainColor-input" class="mx-2 col-span-3 text-center text-sm">Hamster color</label>
        <input id="mainColor-input" class="rounded-md col-span-2 place-self-center h-6" type="color" bind:value={circleColor} />
    </div>
    {/if}
</div>

<style>
:root {
    --main-size: 40px;
    --circle-size: 22px;
    --inner-size: 8px;
    --travel-length: calc((var(--main-size) - var(--circle-size)));
}

.main-box {
    width: var(--main-size);
    height: var(--main-size);
    animation: barrel-roll 3s infinite linear forwards;
    background-color: #130070;
    @apply relative m-8 rounded-xl
}

.circle {
    transform: translate(var(--travel-length), var(--travel-length));
    height: var(--circle-size);
    width: var(--circle-size);
    animation: roll-along 2s infinite linear forwards;
    background-color: #22C55E;
    @apply absolute left-0 top-0 rounded-full
}


@keyframes roll-along {
    25% {
        transform: translate(var(--travel-length),0);
    }
    50% {
        transform: translate(0,0);
    }
    75% {
        transform: translate(0,var(--travel-length));
    }
}

@keyframes barrel-roll {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

</style>