<script>
    import {fly} from 'svelte/transition';
    import { onMount } from 'svelte';

    export let color;
    export let backColor = 'red';


    let flipped;
    let mainCard;
    let flyParams;

    onMount( () => {
        const distance = {
            toTop: mainCard.getBoundingClientRect().top,
            toLeft: mainCard.getBoundingClientRect().left,
            toScreenCenterX: mainCard.getBoundingClientRect().left - window.innerWidth / 2,
        }
        console.log(distance);
        let flyX = (distance.toScreenCenterX > 0) ?  distance.toLeft : -distance.toLeft;
        flyParams = {
            duration: 1000,
            x: flyX,
            easing: (t) => t * (2 - t)
        }
    });

    

    $: console.log(color);

</script>


<div class="card" bind:this={mainCard} >
    {#if !flipped}
    <div transition:fly={flyParams} class="card-side front {`${color}-gradient`}">
        <slot name="front"></slot>
        <div class="absolute h-12 w-12 right-2 bottom-1 z-50">
            <button class="flip-me-button h-full w-full" on:click={ () => flipped = !flipped }>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path class="flip-icon" d="M19.6 42H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h10.6v3H9v30h10.6Zm3 4V2h3v44ZM39 9h-.7V6h.7q1.2 0 2.1.9.9.9.9 2.1v.7h-3Zm0 17.75v-5.5h3v5.5ZM39 42h-.7v-3h.7v-.7h3v.7q0 1.2-.9 2.1-.9.9-2.1.9Zm0-23.75V12.7h3v5.55Zm0 17.05v-5.55h3v5.55ZM28.6 42v-3h6.7v3Zm0-33V6h6.7v3Z"/></svg>
            </button>
        </div>
    </div>
    {/if}
    {#if flipped}
    <div transition:fly={flyParams} class="card-side back {`color: ${backColor}-gradient`}">
        <slot name="back" ></slot>
        <div class="absolute h-12 w-12 right-2 bottom-1 z-50">
            <button class="flip-me-button h-full w-full" on:click={ () => flipped = !flipped }>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path class="flip-icon" d="M19.6 42H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h10.6v3H9v30h10.6Zm3 4V2h3v44ZM39 9h-.7V6h.7q1.2 0 2.1.9.9.9.9 2.1v.7h-3Zm0 17.75v-5.5h3v5.5ZM39 42h-.7v-3h.7v-.7h3v.7q0 1.2-.9 2.1-.9.9-2.1.9Zm0-23.75V12.7h3v5.55Zm0 17.05v-5.55h3v5.55ZM28.6 42v-3h6.7v3Zm0-33V6h6.7v3Z"/></svg>
            </button>
        </div>
    </div>
    {/if}
</div>

<style>


    .flip-me-button {
        transition: all 500ms ease;
        fill: #fff;
    }

    .flip-me-button:hover {
        fill: #E00;
        transform: rotate(180deg);
    }

    .card {
        perspective: 150rem;
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        background: none;
        @apply h-full w-full
    }

    .card-side {
        display: block;
        transition: all 0.9s ease;
        backface-visibility: hidden;
        @apply absolute top-0 left-0 h-full w-full p-2 text-white rounded-xl
    }

    .card-side.back {
        @apply drop-shadow-lg shadow-blue-200;
    }

    .card-side.front {
        @apply drop-shadow-md shadow-orange-200;
    }

    .no-gradient {
        background: #000;
        border: 1px solid rgba(0,0,0,0.8);
    }

    .blue-gradient {
        background-color: #009898;
        background-image: linear-gradient(25deg, #0077ff 0%, #5892e7 50%,  #e8e8e8 100%);
    }

    .red-gradient {
        background-color: #f5f5f5;
        background-image: linear-gradient(25deg, #f79393 0%, #f79888 50%,  #e8e8e8 100%);
    }

    .green-gradient {
        background-color: #f5f5f5;
        background-image: linear-gradient(25deg, #00ff15 0%, #74e27d 50%,  #e8e8e8 100%);
    }

    .yellow-gradient {
        background-color: #f5f5f5;
        background-image: linear-gradient(25deg, #ff9317 0%, #ffb259 50%,  #e8e8e8 100%);
    }

    .darkish-gradient {
        background-color: #f5f5f5;
        background-image: linear-gradient(25deg, #282828 0%, #696666 50%,  #e8e8e8 100%);
    }


</style>