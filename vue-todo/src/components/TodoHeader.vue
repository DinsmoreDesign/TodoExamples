<template>

    <div class="image-header">

        <header>

            <section class="name">
                <h1 v-if="userName">{{ userName }}'s Tasks</h1>
                <div class="actions">
                    <FloatingButton
                        v-on="$listeners"
                        class="is-mobile"
                        title="Delete Completed"
                        isDanger
                    />
                    <TaskButton
                        v-on="$listeners"
                        class="is-desktop"
                        title="Delete Completed"
                        isDelete
                        isDanger
                    />
                </div>
            </section>

            <section class="info-bar" v-if="totalTasks > 0">
                <div class="remaining">
                    <p class="task-count">{{ remainingTasks }}</p>
                    <p>tasks remaining</p>
                </div>
                <div class="completed">
                    <DonutGraph :completed="percentage" />
                    <p class="percent">{{ percentage }}% done</p>
                </div>
            </section>

        </header>

    </div>
    
</template>





<script>

    import DonutGraph from './DonutGraph.vue';
    import FloatingButton from './FloatingButton';
    import TaskButton from './TaskButton';

    export default {

        name: 'TodoHeader',
        components: {

            DonutGraph,
            FloatingButton,
            TaskButton

        },
        props: {

            userName: {
                type: String,
                required: true
            },
            remainingTasks: {
                type: Number,
                required: true
            },
            totalTasks: {
                type: Number,
                required: true
            }

        },
        computed: {

            percentage() {

                const decimal = this.remainingTasks / this.totalTasks;

                return 100 - Math.round(decimal * 100);

            }

        }

    }

</script>





<style lang="scss" scoped>

    header {
        display: flex;
        flex-direction: column;
        color: var(--text-color);
        background: var(--primary-color);

        .name {
            padding: 1rem;

            h1 {
                font-size: 3.75rem;
                font-weight: 200;
                margin: 0;
                padding: 0;
            }

            .actions {
                padding-bottom: 0.75rem;
            }

        }

        .info-bar {
            padding: 1rem;
            display: flex;
            align-items: top;
            background: var(--overlay-color);

            p {
                font-size: 1.1rem;
                margin: 0;
                font-weight: 200;
            }

            .remaining {
                flex: 1;
                padding-right: 1rem;

                .task-count {
                    font-size: 3.5rem;
                    line-height: 1;
                }

            }

            .completed {
                text-align: right;

                &::v-deep .svg-item {
                    margin-left: auto;
                }

            }

        }

    }

    @media screen and (max-width: 1023px) {

        .is-desktop {
            display: none;
        }

    }

    @media screen and (min-width: 1024px) {

        .is-mobile {
            display: none;
        }

        .image-header {
            background: url('../assets/header-bg.jpg')no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        header {
            flex-direction: row;
            min-height: 300px;
            background: var(--desktop-header-color);

            .name {
                align-self: flex-end;
                flex: 1;
                padding: 2rem;
                padding-left: 7.5%;
                display: flex;
                align-items: flex-end;

                h1 {
                    flex: 1;
                }

            }

            .info-bar {
                display: flex;
                align-items: center;
                padding: 2rem;
                padding-right: 7.5%;

                p {
                    font-size: 1rem;
                    margin: 0;
                    font-weight: 200;
                }

                .remaining {
                    flex: 1;
                    padding-right: 2rem;

                    .task-count {
                        font-size: 3.5rem;
                        line-height: 1;
                    }

                }

                .completed {
                    text-align: right;

                    &::v-deep .svg-item {
                        margin-left: auto;
                    }

                }

            }

        }

    }

</style>