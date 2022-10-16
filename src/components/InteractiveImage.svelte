<script>
    import {fly,fade} from 'svelte/transition';
    import {quintIn, cubicInOut} from 'svelte/easing';
    import { onMount } from 'svelte';

    let silentInput = '';
    let cheatcodes = ['SUDO'];
    let triggered = false;
    let speaking = false;
    let sunglasses = false;
    let scrolling = false;

    const toggleSunglasses = () => sunglasses = !sunglasses;
    onMount( () => {
        let eyes = document.getElementById('eyes');
        eyes.addEventListener('click', toggleSunglasses);

        // On scroll, set image's z-index so that it goes behind the navbar
        document.addEventListener('scroll', (e) => {
            scrolling = (window.scrollY > 150);
        });

        document.addEventListener('keyup', (e) => {
            if(e.shiftKey) {
                if(e.key == 'Backspace') {
                    silentInput = silentInput.slice(0,-1)
                } else {
                    silentInput += e.key;
                }
            }

            if(cheatcodes.includes(silentInput)) {
                console.log(silentInput);
                triggered = true;
                silentInput = '';
            }

            switch (e.key) {
                case 's':
                    toggleSunglasses();
                    break;
                case 'r':
                    document.body.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
                    break;
                case 'p':
                    document.body.style.background= `url(https://source.unsplash.com/random/1920x1080)`;
                    document.body.style.backgroundAttachment = 'fixed';
                    break;
                case 'b':
                    document.body.style.background = 'black';
                    break;
                case 'g': //Change background to random color gradient
                    document.body.style.background = `linear-gradient(90deg, rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}), rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}))`;
                    document.getElementById('typing').color = '#0000';
                    break;

            }
        });        
    })


</script>

<div class="div-block-3">
    <div class="img-container">
        {#if !scrolling}
        <svg id="image" transition:fade={{duration: 500, easing: cubicInOut}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1498 2246">
            <defs>
              <style>
                .cls-1 {
                  fill: #fff;
                  opacity: 0;
                }
              </style>
            </defs>
            <image width="1498" height="2246" transform="scale(1.16)" xlink:href="images/emilien_nobg.png"/>
            {#if sunglasses}
            <image id="sunglasses" transition:fly={{duration:800, y: -1000, easing: quintIn}} width="995" height="543" transform="translate(440.46 318.81) scale(.47)" xlink:href="images/sunglasses.png"/>
            {/if}
            <rect id="eyes" on:click={ toggleSunglasses } class="cls-1" x="504.46" y="367.38" width="312.5" height="128.25"/>
          </svg>
        {/if}
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
        z-index: 6000;
    }

    svg {
        --container-height: 100vh;
        --container-width: 30vw;
        position: absolute;
        top: 0;
        right: 0;
        height: var(--container-height);
        width: var(--container-width);
        z-index: 6000;
        background-size: cover;
    }

    #eyes {
        cursor: pointer;
    }

    .commands-list {
        display: none;
    }

    #commands-title:hover + .commands-list {
        display: block;
    }

    .cheatcodes-list {
        display: none;
        position: absolute;
        bottom: 30px;
        right: 4px;
    }

    #cheatcodes-title:hover + .cheatcodes-list {
        display: block;
    }

    .speaking {
        top: 200px;
        left: 150px;
        @apply absolute bg-white opacity-25 w-16 h-10
    }
</style>