<a href="#" class="border-swoosh"><span>Let&#x27;s work &gt;&gt;</span></a>

<style>
.border-swoosh {
    width: 180px;
    height: 60px;
    cursor: pointer;
    color: #FFF;
    font-weight: bold;
    position: relative;
    text-align: center;
    transition: all 0.5s;
    line-height: 60px;
    text-transform: uppercase;
    background-color: rgba(60,60,60,0.5);
}

.border-swoosh span {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.border-swoosh:hover span {
    color: #000;
    letter-spacing: 0.2rem;
}

.border-swoosh::before, .border-swoosh::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0%;
    height: 100%;
    transition: all 0.5s;
}

.border-swoosh::before {
    left: 0;
    border-top: 3px solid #FFF;
}
.border-swoosh::after {
    right: 0;
    border-bottom: 3px solid #FFF;
}

.border-swoosh:hover::before {
    width: 100%;
    background-color: rgba(255,255,255,0.5);
}
.border-swoosh:hover::after {
    width: 100%;
    background-color: rgba(255,255,255,0.5);
}
</style>