<template>

    <form @submit.prevent="handleSubmit">

        <section class="header">
            <h1>Thanks for visiting!</h1>
            <p>What should we call you?</p>
        </section>

        <section>
            <TextInput
                label="Name"
                :hasError="hasError"
                :value="name"
                @input="handleInput"
            />
            <p class="error" v-if="hasError">
                Field is required.
            </p>
        </section>

        <section class="actions">
            <TaskButton type="submit" title="Submit" isLarge />
        </section>

    </form>

</template>





<script>

    import TextInput from './TextInput';
    import TaskButton from './TaskButton';

    export default {

        name: 'NamePrompt',
        components: {

            TextInput,
            TaskButton

        },
        data() {
            return {

                name: '',
                hasError: false

            }
        },
        methods: {

            handleInput(val) {

                this.name = val;

                this.runValidation(val);

            },
            runValidation(val) {

                val ? this.hasError = false : this.hasError = true;

            },
            handleSubmit() {

                this.runValidation(this.name);

                if (!this.hasError) {

                    this.$emit('submitName', this.name);

                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    h1,
    p {
        margin: 0;
        padding: 0;
    }

    h1 {
        color: var(--text-color);
        font-size: 3.5rem;
        font-weight: 200;
    }

    p {
        font-size: 1.5rem;
        color: var(--muted-text-color);

        &.error {
            color: var(--red);
            font-size: 1rem;
            margin-top: -1rem;
            margin-left: 0.5rem;
        }

    }

    section {
        padding: 1rem;

        &.header {
            background: var(--light-purple);    
        }

    }

</style>