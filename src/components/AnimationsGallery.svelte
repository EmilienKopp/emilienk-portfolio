<script>
import { fade } from 'svelte/transition';

import AnimationItem from '../components/AnimationItem.svelte';
import SquareHamster from '../components/SquareHamster.svelte';
import BeatingHeart from '../components/BeatingHeart.svelte';
import RotatingCheckbox from '../components/RotatingCheckbox.svelte';
import NeonRings from '../components/NeonRings.svelte';
import CoolButtons from '../components/CoolButtons.svelte';

let rotatingCheckboxChecked = false;

</script>

<AnimationItem animationTitle="SquareHamster" scale={1} color="no" tools={['css3']} flippable={false}>
    <SquareHamster slot="animation" controls={true} animate={false}/>
</AnimationItem>

<AnimationItem animationTitle="BeatingHeart" scale={1} color="no" tools={['css3']}>
    <div slot="animation">
        <BeatingHeart style="simple" controls={true}>
        </BeatingHeart>
    </div>
    <div slot="variants" class="h-full w-full grid grid-cols-2 gap-10 place-items-center pt-8">
        <BeatingHeart style="realistic" BPM=40>
            <h5 slot="label">Realistic</h5>
        </BeatingHeart>
        <BeatingHeart style="cartoon" BPM=40> 
            <h5 slot="label">Cartoon</h5>
        </BeatingHeart>
    </div>
</AnimationItem>

<AnimationItem animationTitle="RotatingCheckbox" scale={1} color="no" flippable={false} tools={['css3','svelte']}>
    <RotatingCheckbox slot="animation" bind:checked={rotatingCheckboxChecked}>
        <p>Check me</p>
    </RotatingCheckbox>
    
    <div slot="output">
        {#if rotatingCheckboxChecked}
        <div class="mt-6 flex flex-col text-lg font-bold" transition:fade={{duration: 600}}>Hi there ! <span class="text-5xl">😶‍🌫️</span></div>
        {/if}
    </div>
    
</AnimationItem>

<AnimationItem animationTitle="ShootingStars" scale={0.8} color="no" flippable={false} tools={['css3']}>
    <NeonRings slot="animation" />
</AnimationItem>

<AnimationItem animationTitle="CoolButtons" scale={1} color="no" flippable={false} tools={['css3']}>
    <CoolButtons slot="animation" />
</AnimationItem>

<style>

</style>