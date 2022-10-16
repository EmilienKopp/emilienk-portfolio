<script>
    export let size = 30;
    export let beat = true;
    export let style = 'realistic';
    export let BPM = 80;
    export let clockwiseRotation = 0;
    export let color = '#b01011';
    export let controls = false;

    let speed = 60 / BPM;

    let heartContainerCSS, heartTurnerCSS, heartCSS, heartLeftCSS, heartRightCSS;

    $: {
        speed = (BPM > 0 ? 60 / BPM : 0);
        heartContainerCSS = `position: relative; width: ${size}px; height: ${size}px;`;
        heartCSS =  `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            animation-duration: ${speed}s;
            animation-play-state: ${beat ? 'running' : 'paused'};
        `;
        heartTurnerCSS = `transform: rotate(${-135 + clockwiseRotation}deg);`;
        heartLeftCSS = `
            position: absolute;
            bottom: 0px;
            left: ${size / 2}px;
            content: '';
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${color};
        `;
        heartRightCSS = `
            position: absolute;
            top: ${size / 2}px;
            right: 0px;
            content: '';
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${color};
        `;

        console.log(BPM, speed, heartContainerCSS);
    }

</script>

<div class="h-full w-full flex flex-col items-center">
    <div class="heart-container w-full" style={heartContainerCSS}>
        <div class="heart-turner" style={heartTurnerCSS}>
            <div class="heart heart-{style}" style={heartCSS}>
                <div class="heart__left" style={heartLeftCSS}>
                </div>
                <div class="heart__right" style={heartRightCSS}>
                </div> 
            </div>
        </div>
        <div class="-ml-5 mt-5">
            <slot name="label"></slot>
        </div>
    </div>
    {#if controls}
    <div class="controls pt-10 grid grid-cols-5 gap-3 text-md">
        <input id="bpm-input" class="col-span-3" type="range" min="0" max="160" bind:value={BPM} /><label for="bpm-input" class="mx-2 col-span-2 place-self-center"> {BPM} BPM</label>

        <label for="color-input" class="mx-2 col-span-3 text-center">Pick a color</label>
        <input id="color-input" class="rounded-md col-span-2 place-self-center" type="color" bind:value={color} />
    </div>
    {/if}
</div>
<style>

.heart-simple {
    animation-name: beat-simple;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.43, 0.16, 0.39, 0.72);
    animation-direction: forwards;
}

.heart-realistic {
    animation-name: beat-realistic;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: forwards;
}

.heart-cartoon {
    animation-name: beat-cartoon;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: forwards;
}


@keyframes beat-simple {
    0% {
        transform: scale(0.8);
    }
    25% {
        transform: scale(1.6);
    }
    50% {
        transform: scale(1.1);
    }
    75% {
        transform: scale(1.4);
    }
    100% {
        transform: scale(0.8);
    }
}

@keyframes beat-cartoon {
    0% {
        transform: scale(0.8);
    }
    25% {
        transform: scale(2);
    }
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(2.8);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes beat-realistic {
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(1.1);
    }
    15% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.9);
    }
    35% {
        transform: scale(1.6);
    }
    50% {
        transform: scale(1.1);
    }
    60% {
        transform: scale(0.8);
    }
    75% {
        transform: scale(1.1);
    }
    80% {
        transform: scale(1.2);
    }
    90% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

</style>