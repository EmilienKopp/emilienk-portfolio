<script>
    export let color;

    

</script>

<div class="card">
    <div class="card-side front {`${color}-gradient`}">
        <slot></slot>
    </div>
</div>


<style>
    .card {
        perspective: 150rem;
        box-shadow: none;
        background: none;
        @apply h-full w-full
    }

    .card-side {
        display: block;
        transition: all 0.9s ease;
        backface-visibility: hidden;
        @apply absolute top-0 left-0 h-full w-full p-2 text-white rounded-xl
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