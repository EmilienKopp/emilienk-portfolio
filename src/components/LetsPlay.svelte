<script>
    export let show = false;
</script>

<a on:click={() => {show = !show} } class="button-2 w-button glow-hover">DON'T PRESS THIS</a>

{#if show}
    <div id="controls" class="fixed bottom-2 right-2 text-sm text-left p-2 opacity-70 bg-white">
        <div id="commands-title">Commands</div>
        <ul class="commands-list">
            <li>Shift + [any letter]: Type something and make me say it</li>
            <li>Shift + Backspace: Erase one letter</li>
            <li>Shift + Backspace: Clear input</li>
            <li><strong>S</strong>: Toggle <strong>S</strong>unglasses</li>
            <li><strong>R</strong>: Change background to <strong>R</strong>andom color</li>
            <li><strong>G</strong>: Change background to random color <strong>G</strong>radient</li>
            <li><strong>P</strong>: Change background to random <strong>P</strong>icture</li>
            <li><strong>B</strong>: Set <strong>B</strong>ackground <strong>B</strong>ack to <strong>B</strong>lack</li>
            <li><strong>F</strong>: Bring background code to <strong>F</strong>oreground</li>
        </ul>
    </div>
{/if}

<style>

#controls {
    z-index: 9999;
    font-weight: 600;
}

.glow-hover {
    width: 190px;
    height: 50px;
    border: 1px solid #fff;
    outline: none;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #111111;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    -webkit-user-select: none; /* Safari */
    user-select: none;
}

.glow-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-hover:active {
    color: #000;
    font-weight: bold;
    background: transparent;
}

.glow-hover:active:after {
    background: transparent;
}

.glow-hover:hover:before {
    opacity: 1;
}

.glow-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

</style>