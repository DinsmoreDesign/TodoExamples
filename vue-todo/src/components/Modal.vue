<template>

    <div aria-role="dialog" class="modal">
        <div class="modal-background" @click="close"></div>
        <button aria-label="close" class="modal-close" @click="close" tabindex="1" v-if="allowClose"></button>
        <div class="modal-content">
            <slot/>
        </div>
    </div>

</template>





<script>

    export default {

        name: 'Modal',
        props: {

            allowClose: {
                type: Boolean,
                required: false,
                default: true
            }

        },
        methods: {

            close() {

                if (this.allowClose) {

                    this.$emit('close');

                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    .modal {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
            -webkit-box-align: center;
            -ms-flex-align: center;
        align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
        display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
        justify-content: center;
        overflow: hidden;
        position: fixed;
        z-index: 20;

        .modal-background {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.75);
        }

        .modal-content {
            background: var(--background-color);
            color: var(--text-color);
            margin: 0 20px;
            max-height: calc(100vh - 160px);
            overflow: auto;
            position: relative;
            width: 100%;
                -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
            box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
        }

        @media screen and (min-width: 769px) {

            .modal-content {
                margin: 0 auto;
                max-height: calc(100vh - 40px);
                width: 640px;
            }
            
        }

        .modal-close {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
            user-select: none;
                -moz-appearance: none;
                -webkit-appearance: none;
            background-color: rgba(10,10,10,.2);
            border: none;
            border-radius: 290486px;
            cursor: pointer;
            display: inline-block;
                -webkit-box-flex: 0;
                -ms-flex-positive: 0;
            flex-grow: 0;
                -ms-flex-negative: 0;
            flex-shrink: 0;
            font-size: 1rem;
            outline: 0;
            position: relative;
            vertical-align: top;
            background: 0 0;
            height: 32px;
            position: fixed;
            right: 20px;
            top: 20px;
            width: 32px;

            &:before, &:after {
                background-color: #fff;
                content: "";
                display: block;
                left: 50%;
                position: absolute;
                top: 50%;
                -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
                transform: translateX(-50%) translateY(-50%) rotate(45deg);
                -webkit-transform-origin: center center;
                transform-origin: center center;
            }
            &:before {
                height: 2px;
                width: 50%;
            }
            &:after {
                height: 50%;
                width: 2px;
            }

        }

    }

</style>