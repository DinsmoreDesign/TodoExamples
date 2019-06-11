<template>

    <button
        v-on="$listeners"
        :type="type"
        :title="title"
        :class="{ 'is-danger': isRed, 'is-large': isLarge }"
    >
        <svg v-if="isDelete"
            role="img"
            :aria-labelledby="`deleteTitle-${ _uid } deleteDescription-${ _uid }`"
            class="delete-icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="14px"
            height="18px"
            viewBox="5 3 14 18"
            enable-background="new 5 3 14 18"
            xml:space="preserve"
            fill="#FFFFFF"
        >
            <title :id="`deleteTitle-${ _uid }`">Delete Icon</title>
            <description :id="`deleteDescription-${ _uid }`">Engage to delete all completed tasks.</description>
            <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M8,9h8v10H8V9z M15.5,4l-1-1h-5l-1,1H5v2h14V4H15.5z"/>
        </svg>
        {{ title }}
    </button>

</template>





<script>

    export default {

        name: 'TaskButton',
        props: {

            type: {
                type: String,
                required: false,
                default: 'button'
            },
            isDelete: {
                type: Boolean,
                required: false
            },
            isDanger: {
                type: Boolean,
                required: false
            },
            title: {
                type: String,
                required: false
            },
            isLarge: {
                type: Boolean,
                required: false
            }

        },
        computed: {

            isRed() {

                return this.isDanger || this.isDelete;

            }

        }

    }

</script>





<style lang="scss" scoped>

    button {
        background: var(--secondary-color);
        border: 2px solid;
        border-color: #FFF;
        border-radius: 3px;
        color: #FFF;
        transition: all 0.5s;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;

        &.is-large {
            font-size: 1.5rem;
            padding: 1rem;
        }

        svg {
            height: 1rem;
            width: auto;
            margin-right: 0.5rem;
            transition: fill 0.5s;
        }

        &.is-danger {
            background: var(--danger-color);

            &:hover {
                background: transparent;
                color: var(--danger-color);
                border-color: var(--danger-color);

                svg {
                    fill: var(--danger-color);
                }
            }

        }

        &:hover {
            background: transparent;
            color: var(--secondary-color);
            border-color: var(--secondary-color);

            svg {
                fill: var(--secondary-color);
            }

        }

    }

</style>