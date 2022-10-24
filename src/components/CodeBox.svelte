<script>
    import {onMount} from 'svelte';

    
        
    let foreground = false;
    let typingBlock;

    onMount(() => {
        const code = typingBlock.textContent;
        document.addEventListener('keypress', (e) => {
            if( document.activeElement === document.getElementById('chatInput') ) return;
            if(e.key == 'f') {
                foreground = !foreground;
            }
        });
    });




</script>
<div>
    <pre class="rounded-md px-4 py-2" style={ foreground ? `background-color: rgb(48,48,48, .8); z-index:9999; opacity: 1; position: absolute;` : ''}>
        <code class="code-panel language-javascript">
            <span id="typing" class="type" style="--n:478" bind:this={typingBlock}>
                {`import { JavaScript, PHP, C#, CSS, MySQL } from 'languages';`}<br/>
                {`import { Webflow, Figma, Illustrator, GIMP } from 'design';`}<br/>
                {`import { Svelte, React, Angular, .NET, Laravel } from 'frameworks';`}<br/>
                <br/>
                {`export function WorkForYou ( coffee, dollars) {`}<br/>
                &emsp;&emsp;{`while ( coffee && dollars && ! work.isPerfect() ) {`}<br/>
                &emsp;&emsp;&emsp;&emsp;{`code();`}<br/>
                &emsp;&emsp;{`}`}<br/>
                &emsp;&emsp;{` return GreatValue;`}<br/>
                {`}`}<br/>
            </span>
        </code>
    </pre>
</div>



<style>
    pre {
        white-space: normal;
        background-color: transparent;
        color: #FFF;
        position: fixed;
        top: 10%;
        left: 2%;
        opacity: 0.15;
        z-index: -1;
        transition: opacity .6s ease-in-out;
    }
    .code-panel {
        font-family: monospace;
        font-size: 1.6rem;
        line-height: 4.0rem;
    }

    .type {
        color:#0000;
        background:
            linear-gradient(-90deg,#FFFFFF 5px,#0000 0) 10px 0, /* CARET COLOR */
            linear-gradient(#FFFFFF 0 0) 0 0; /* TEXT COLOR */
        background-size:calc(var(--n)*1ch) 200%;
        -webkit-background-clip:padding-box,text;
        background-clip:padding-box,text;
        background-repeat:no-repeat;
        animation: 
        b .5s infinite steps(1),   
        t calc(var(--n)*.1s) steps(var(--n)) forwards;
    }

    @keyframes t{
        from {background-size:0 200%}
    }
    @keyframes b{
        50% {background-position:0 -100%,0 0}
    }

</style>