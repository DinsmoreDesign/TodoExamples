<template functional>

    <section>

        <div class="done"></div>

        <div class="content"></div>

        <div class="actions">
            <button></button>
            <button></button>
        </div>

    </section>

</template>





<script>

    import getDateDiff from '@/helpers/getDateDiff';

    export default {

        name: 'LoadingTask'

    }

</script>





<style lang="scss" scoped>

    section {
        display: flex;
        background: var(--primary-color);
        border: 1.5px solid var(--outline-color);
        border-radius: 6px;
        height: 143px;
        animation-name: pulse;
        animation-duration: 3s;
        animation-iteration-count: infinite;

        .done {
            display: flex;
            align-items: stretch;
            padding: 1rem;
            border-radius: 3px 0 0 3px;
            background: var(--dark-task-button-color);
            width: 63px;
        }

        .content {
            align-self: center;
            flex-grow: 1;
            padding: 1rem;
        }

        .actions {
            display: flex;
            flex-direction: column;
            width: 66px;

            button {
                flex: 1;
                padding: 1rem;
                cursor: pointer;
                transition: opacity 0.5s;

                &:first-child {
                    background: var(--dark-task-button-color);
                    border: 1px solid var(--outline-color);
                    border-radius: 0 3px 0 0;
                }

                &:last-child {
                    background: var(--light-task-button-color);
                    border: 1px solid var(--outline-color);
                    border-radius: 0 0 3px 0;
                }

            }

        }

    }

    @keyframes pulse {
        from {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(0.98);
            opacity: 0.25;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

</style>