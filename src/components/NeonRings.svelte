<script>
    export let direction = "counter-clockwise";
</script>


    <div class="container">
        <div class="neon-ring bottom-left border-left blue clockwise fast"></div>
        <div class="neon-ring top border-top red clockwise slow"></div>
        <div class="neon-ring bottom-right border-right green counter-clockwise normal"></div>
        <p class="message">Loading ...</p>
    </div>


<style>

.container {
    resize: both;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 10px;
}

.message {
    font-family: consolas;
    position: relative;
    bottom: 2px;
    left: 75px;
}

/* Ring */
.neon-ring {
    content: " ";
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-color: transparent;
    filter: blur(0.8px);
}

.neon-ring.groove {
    border-style: groove;
}

/* Ring Colors */
.neon-ring.red {
    border-color: rgb(176, 16, 17, 0.9);
}

.neon-ring.green {
    border-color: rgb(37, 236, 19);
}

.neon-ring.blue {
    border-color: rgb(41, 22, 206, 0.9);
}

/* Ring Borders */
.neon-ring.border-left {
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
}

.neon-ring.border-top {
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
}

.neon-ring.border-right {
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
}

.neon-ring.border-bottomm {
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
}


/* Ring Position */
.container .neon-ring.bottom-left {
    bottom: 20px;
    left: 20px;
}

.container .neon-ring.top {
    top: 60px;
    left: 70px;
}

.container .neon-ring.bottom-right {
    bottom: 20px;
    right: 20px;
}

/* Ring Animation */
.neon-ring.clockwise {
    animation-name: clockwise;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.neon-ring.counter-clockwise {
    animation-name: counter-clockwise;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.neon-ring.fast {
    animation-duration: 3s;
}

.neon-ring.normal {
    animation-duration: 4s;
}

.neon-ring.slow {
    animation-duration: 5s;
}


/* Stars */
.neon-ring::before {
    pointer-events: none;
    content: " ";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.neon-ring.red::before {
    background-color: rgb(176, 16, 17);
    box-shadow: 0 0 1px 5px rgba(176, 16, 17, 0.3), 0 0 2px 10px rgba(176, 16, 17, 0.2), 0 0 3px 20px rgb(176, 16, 17, 0.1), 0 0 20px rgb(176, 16, 17), 0 0 40px rgb(176, 16, 17);
}

.neon-ring.blue::before {
    background-color: rgb(41, 22, 206);
    box-shadow: 0 0 1px 5px rgba(41, 22, 206, 0.3), 0 0 2px 10px rgba(41, 22, 206, 0.2), 0 0 3px 20px rgb(41, 22, 206, 0.1), 0 0 20px rgb(41, 22, 206), 0 0 40px rgb(41, 22, 206);
}

.neon-ring.green::before {
    background-color: rgb(37, 236, 19);
    box-shadow: 0 0 1px 5px rgba(37, 236, 19, 0.3), 0 0 2px 10px rgba(37, 236, 19, 0.2), 0 0 3px 20px rgb(37, 236, 19, 0.1), 0 0 20px rgb(37, 236, 19), 0 0 40px rgb(37, 236, 19);
}


/* Stars Position */
.neon-ring.clockwise.border-left::before {
    top: 12px;
    left: 12px;
}

.neon-ring.clockwise.border-top::before {
    top: 12px;
    right: 12px;
}

.neon-ring.counter-clockwise.border-right::before {
    top: 12px;
    right: 12px;
}

/* TODO: Add other positions */



/* Keyframes */
@keyframes counter-clockwise {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes clockwise {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}



</style>