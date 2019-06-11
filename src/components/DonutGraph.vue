<template functional>

    <div class="svg-item">
        <svg
            role="img"
            :aria-labelledby="`title-${ _uid } description-${ _uid }`"
            width="100%"
            height="100%"
            viewBox="0 0 40 40"
            class="donut"
        >
            <title :id="`title-${ _uid }`">Donut Graph</title>
            <description :id="`description-${ _uid }`">Used to visually show the percentage of items complete.</description>
            <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
            <circle class="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" :stroke-dasharray="`${ props.completed } ${ 100 - props.completed }`" stroke-dashoffset="25"></circle>
        </svg>
    </div>

</template>





<script>

    export default {
        
        name: 'DonutGraph'

    }

</script>





<style>

    .svg-item {
        width: 3.5rem;
        height: auto;
        animation: donutfade 1s;
    }

    .donut-ring {
        stroke: var(--muted-text-color);
    }

    .donut-segment {
        transform-origin: center;
        stroke: var(--text-color);
        animation: donut 3s;
    }

    @keyframes donutfade {
        0% {
            opacity: .2;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes donut {
        0% {
            stroke-dasharray: 0, 100;
        }
        100% {
            stroke-dasharray: 69, 31;
        }
    }

</style>