<template>

    <form @submit.prevent="handleSubmit">

        <section class="header">
            <h1>Edit</h1>
        </section>

        <section>

            <TextInput
                label="Title"
                :hasError="hasTitleError"
                :value="title"
                @input="handleTitleInput"
            />
            <p class="error" v-if="hasTitleError">
                Field is required.
            </p>

            <TextInput
                isTextArea
                label="Description"
                :hasError="hasDescriptionError"
                :value="description"
                @input="handleDescriptionInput"
            />
            <p class="error" v-if="hasDescriptionError">
                Field cannot be greater than 140 characters.
            </p>

        </section>

        <section class="actions">
            <TaskButton
                type="button"
                title="Cancel"
                isDanger
                isLarge
                @click="$emit('close')"
            />
            <TaskButton
                type="submit"
                title="Submit"
                isLarge
            />
        </section>

    </form>

</template>





<script>

    import TextInput from './TextInput';
    import TaskButton from './TaskButton';

    export default {

        name: 'EditTask',
        components: {

            TextInput,
            TaskButton

        },
        props: {

            data: {
                type: Object,
                required: true,
                validator: val => {

                    if (val.id === null || val.title === null || val.description === null) return false;
                    return true

                }
            }

        },
        data() {
            return {

                name: '',
                hasTitleError: false,
                hasDescriptionError: false,
                title: null,
                description: null

            }
        },
        created() {

            this.title = this.data.title;
            this.description = this.data.description;

        },
        methods: {
            
            runTitleValidation(val) {

                val ? this.hasTitleError = false : this.hasTitleError = true;

            },
            runDescriptionValidation(val) {

                val && val.length > 140 ? this.hasDescriptionError = true : this.hasDescriptionError = false;

            },
            runValidation() {
                
                this.runTitleValidation(this.title);
                this.runDescriptionValidation(this.description);

            },
            handleTitleInput(val) {

                this.title = val;

                this.runTitleValidation(val);

            },
            handleDescriptionInput(val) {

                this.description = val;

                this.runDescriptionValidation(val)

            },
            handleSubmit() {

                this.runValidation();

                if (!this.hasTitleError && !this.hasDescriptionError) {

                    if (this.data.index !== null) {

                        this.$emit('submitEdit', {
                            title: this.title,
                            description: this.description,
                            index: this.data.index,
                            id: this.data.id
                        });

                    } else {

                        this.$emit('addTask', {
                            title: this.title,
                            description: this.description,
                            done: false
                        });

                    }

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

        &.actions {
            button {
                display: inline-block;

                &:first-child {
                    margin-right: 1rem;
                }

            }
        }

    }

</style>