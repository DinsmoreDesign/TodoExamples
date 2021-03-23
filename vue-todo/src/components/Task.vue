<template>

    <section :class="{ 'completed': checked }">

        <div class="done">
            <label>
                <span class="sr-hide">Done</span>
                <input class="checkbox" type="checkbox" v-model="checked" />
            </label>
        </div>

        <div class="content">
            <div class="title-block">
                <h3>{{ data.title }}</h3>
                <p class="date-block">
                    <strong class="date">{{ checked ? 'completed' : `${ dateDiff}d` }}</strong>
                </p>
            </div>
            <p class="description" v-if="data.description">{{ data.description }}</p>
        </div>

        <div class="actions">
            <button @click="emitEvent('edit')">

                <svg
                    role="img"
                    :aria-labelledby="`editTitle-${ _uid } editDescription-${ _uid }`"
                    class="edit-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <title :id="`editTitle-${ _uid }`">Edit Icon</title>
                    <description :id="`editDescription-${ _uid }`">Engage to edit current task.</description>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>

            </button>
            <button @click="emitEvent('delete')">

                <svg
                    role="img"
                    :aria-labelledby="`deleteTitle-${ _uid } deleteDescription-${ _uid }`"
                    class="delete-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <title :id="`deleteTitle-${ _uid }`">Delete Icon</title>
                    <description :id="`deleteDescription-${ _uid }`">Engage to delete current task.</description>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/>
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                </svg>

            </button>
        </div>

    </section>

</template>





<script>

    import getDateDiff from '@/helpers/getDateDiff';

    export default {

        name: 'Task',
        props: {

            data: {
                type: Object,
                required: true
            }

        },
        computed: {

            checked: {

                get() {

                    return this.data.done;

                },
                set(val) {

                    this.emitEvent('checked', {
                        ...this.data,
                        done: val
                    })

                }

            },
            emitObject() {

                return this.data;

            },
            dateDiff() {

                return getDateDiff(this.data.created);

            }

        },
        methods: {

            emitEvent(name, data) {

                this.$emit(name, data ? data : this.emitObject)

            }

        }

    }

</script>





<style lang="scss" scoped>

    section {
        display: flex;
        background: var(--primary-color);
        border: 1.5px solid var(--outline-color);
        border-radius: 6px;

        &.completed {
            opacity: 0.6;
        }

        .done {
            display: flex;
            align-items: stretch;
            padding: 1rem;
            border-radius: 3px 0 0 3px;
            background: var(--dark-task-button-color);

            label {
                align-self: center;
                
                input[type=checkbox] {
                    width: 1.5rem;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    height: 1.5rem;
                    border-radius: 3px;
                    background: #FFF;
                    cursor: pointer;

                    &:after {
                        margin-left: .4rem;
                        width: .5rem;
                        height: 1rem;
                        border: solid transparent;
                        border-width: 0 3px 3px 0;
                        content: "";
                        display: inline-block;
                    }

                    &:checked:after {
                        border: solid var(--purple);
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }

                }

            }
        }

        .content {
            align-self: center;
            flex-grow: 1;
            padding: 1rem;
            color: var(--text-color);
            word-break: break-word;

            h3,
            p {
                margin: 0;
                font-weight: 200;
            }

            .title-block {
                position: relative;

                .date-block {
                    position: absolute;
                    right: 0;
                    top: -1rem;
                }

                h3 {
                    margin-bottom: 0.5rem;
                    font-size: 2rem;
                }

                strong {
                    font-weight: 700;
                }

            }

            .description {
                color: var(--muted-text-color);
            }

        }

        .actions {
            display: flex;
            flex-direction: column;

            button {
                flex: 1;
                color: var(--text-color);
                padding: 1rem;
                cursor: pointer;
                transition: opacity 0.5s;

                &:hover {
                    opacity: 0.6;
                }
                
                svg {
                    fill: #FFF;
                    width: 2rem;
                    height: 2rem;
                }

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

</style>