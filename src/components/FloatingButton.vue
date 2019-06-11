<template>

    <div
        :class="{ 'floating-button': true, 'is-danger': isDanger }"
        v-on="$listeners"
>
        <div class="info-wrapper">
            <strong>{{ title }}</strong>
        </div>
        <div
            :class="{ 'button-wrapper': true, 'active': isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
        >
            <button
                :title="title"
                type="button"
                :class="{ 'active': isActive }"
            >
                
                <svg v-if="!isDanger"
                    role="img"
                    :aria-labelledby="`addTitle-${ _uid } addDescription-${ _uid }`"
                    class="add-icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="14px"
                    height="14px"
                    viewBox="5 5 14 14"
                    enable-background="new 5 5 14 14"
                    xml:space="preserve"
                >
                    <title :id="`addTitle-${ _uid }`">Add Icon</title>
                    <description :id="`addDescription-${ _uid }`">Engage to add a new task.</description>
                    <path fill="#FFFFFF" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/>
                </svg>

                <svg v-else
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
                >
                    <title :id="`deleteTitle-${ _uid }`">Delete Icon</title>
                    <description :id="`deleteDescription-${ _uid }`">Engage to delete all complete tasks.</description>
                    <path fill="#FFFFFF" d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M8,9h8v10H8V9z M15.5,4l-1-1h-5l-1,1H5v2h14V4H15.5z"/>
                </svg>

            </button>
        </div>
    </div>

</template>





<script>

    export default {

        props: {
            
            isDanger: {
                type: Boolean,
                required: false
            },
            title: {
                type: String,
                required: false
            }

        },
        data() {
            return {

                isActive: false

            }
        }

    }

</script>





<style lang="scss" scoped>

    .floating-button {
        border-radius: 2rem;
        position: fixed;
        cursor: pointer;
        bottom: 1rem;
        right: 1rem;
        z-index: 100;
        display: flex;
        box-sizing: border-box;
        border: 2px solid var(--outline-color);
        background: var(--secondary-color);

        &.is-danger {
            background: var(--danger-color);
        }

        &:hover {
				opacity: 0.75;

            svg {
                transform: rotate(360deg);
            }

            .info-wrapper {
                max-width: 300px;

                strong {
                    visibility: visible;
                    opacity: 1;
                    transition: opacity 0.5s 0.25s;
                }
            }

        }

        .button-wrapper {
            display: flex;
            align-content: center;
            justify-content: center;
            border-radius: 55px;
            width: 55px;
            height: 55px;
			opacity: 1;
			transition: opacity 0.5s;

			svg {
				transition: all 0.5s;
                width: 25px;
                height: auto;
			}

            button {
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                margin: 0;
            }

        }

        .info-wrapper {
            overflow: hidden;
            align-items: center;
            display: flex;
			max-width: 0;
			transition: max-width 0.5s;

            strong {
                color: #FFF;
                display: inline;
                padding: 0 0 0 1rem;
				opacity: 0;
				visibility: hidden;
            }

        }

        a {
            display: block;
            text-align: center;
            line-height: 55px;
            font-size: 25px;
        }

    }

</style>