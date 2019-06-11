<template>

    <div :class="{ 'field': true, 'has-error': hasError }">

        <textarea v-if="isTextArea"
            :id="inputId"
            v-model="inputValue"
        />

        <input v-else
            type="text"
            :id="inputId"
            v-model="inputValue"
        />

        <label
            :for="inputId"
            :id="labelId"
            :class="{ 'show': inputValue }"
        >
            {{ label }}
        </label>
    </div>

</template>





<script>

    export default {

        name: 'TextInput',
        props: {

            isTextArea: {
                type: Boolean,
                required: false
            },
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: false
            },
            hasError: {
                type: Boolean,
                required: false
            }

        },
        computed: {

            inputId() {

                return this.label.replace(/\s/g, '');

            },
            labelId() {

                return this.inputId + 'Label';

            },
            inputValue: {

                get() {

                    return this.value;

                },
                set(val) {

                    this.$emit('input', val);

                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    label {
        color: var(--light-purple);
        font-size: 1.75rem;
        font-weight: 500;
        left: 0.5rem;
        position: absolute;
        top: 0.25rem;
        transition: all 0.1s linear;
    }

    input,
    textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--text-color);
        color: var(--text-color);
        font-size: 1.5rem;
        padding: 0.75rem 0.5rem 0.5rem;
        width: 100%;
    }

    input:focus + label,
    input + label.show,
    textarea:focus + label,
    textarea + label.show {
        border-radius: 4px;
        color: var(--light-purple);
        font-size: 1rem;
        left: .5rem;
        padding: 0 .15rem;
        text-transform: uppercase;
        top: -1rem;
    }

    .field {
        margin: 2rem 0;
        position: relative;

        &.has-error {

            label {
                color: var(--red);
            }

            input,
            textarea {
                border-bottom: 1px solid var(--red);
            }

            input:focus + label,
            input + label.show,
            textarea:focus + label,
            textarea + label.show {
                color: var(--red);
            }

            input:focus,
            textarea:focus {
                border-color: var(--red);
                outline: 0;
            }

        }

    }

    input:focus,
    textarea:focus {
        border-color: var(--light-purple);
        outline: 0;
    }

</style>