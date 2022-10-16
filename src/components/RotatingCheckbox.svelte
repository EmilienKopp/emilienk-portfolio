<script>
    import { scale } from "svelte/transition";
    export let checked = false;
    let hovered = false;
    let style = "border: 1px solid red";
    let hasChanged = false;
    let box;
    $: {
        if( !checked && !hovered ) {
            style = "border: 2px solid brown";
        } else if( !checked && hovered && hasChanged ) {
            style = "border: 2px solid brown; transform: rotate(-90deg)";
        } else if( checked && !hovered && !hasChanged ) {
            style = "border: 2px solid green";
        } else if( checked && hovered && !hasChanged ) {
            style = "border: 2px solid brown";
        } else if( checked && hovered && hasChanged) {
            style = "border: 2px solid green";
        }
    }
</script>

<div class="relative flex flex-row items-center w-full mt-8">
    <input type="checkbox" bind:checked hidden/>
    <button bind:this={box} class="rotating-checkbox cursor-default" style="{style}"  on:click={ () => {checked = !checked; hasChanged = true;} } on:mouseenter={() => { hovered = true} } on:mouseleave={ () => {hasChanged = false; hovered = false;} }>
        {#if checked}
            <span transition:scale>✓</span>
        {/if}
    </button>
    <p class="mx-2 cursor-default" on:click={ () => {checked = !checked; hasChanged = true;} } on:mouseenter={() => { hovered = true} } on:mouseleave={ () => {hasChanged = false; hovered = false;} }><slot></slot></p>
</div>

<style>

    
    .rotating-checkbox {
        transition: transform 0.5s ease-out;
        border-radius: 10%;
        transform: rotate(-90deg);
        background-color: azure;
        color:darkgreen;
        font-weight: bolder;
        @apply h-6 w-6 flex justify-center items-center relative
    }

    .rotating-checkbox:hover {
        transform: rotate(0deg);
    }

    input[type="checkbox"]:checked ~ .rotating-checkbox {
        border-radius: 10%;
        transform: rotate(0deg);
        transition: transform 1s ease-in;

    }

    .rc-modal {
        transform: scale(0);
        opacity: 0;
        transition: all 800ms ease-out;
        @apply bg-lime-300 absolute -top-7 rounded-md text-xs p-1 whitespace-nowrap
    }


    .rotating-checkbox:hover ~ .rc-modal {
        display: block;
        opacity: 1;
        transform: scale(1);
    }

    input[type="checkbox"]:checked ~ .rotating-checkbox .inner-circle {
        @apply bg-green-500
    }

    .inner-circle {
        transform: rotate(180deg);
        @apply rounded-full bg-red-500 h-4 w-4 absolute top-1 text-center text-white text-xs
    }



    @keyframes in {
        from {
            border-radius: 0.5rem;
            transform: rotate(0deg);
        }
        to {
            border-radius: 100%;
            transform: rotate(180deg);
        }
    }

    @keyframes out {
        from {
            border-radius: 100%;
            transform: rotate(180deg);
        }
        to {
            border-radius: 0.5rem;
            transform: rotate(0deg);
        }
    }

</style>