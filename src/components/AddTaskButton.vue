<template functional>

    <button type="button" name="Add Task" v-on="listeners">
        <svg
            role="img"
            :aria-labelledby="`title-${ _uid } description-${ _uid }`"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <title :id="`title-${ _uid }`">Add Icon</title>
            <description :id="`description-${ _uid }`">Plus Icon used to describe the button title.</description>
            <path id="plus" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        {{ props.title }}
    </button>

</template>





<script>

    export default {
        
        name: 'AddTaskButton'

    }

</script>





<style lang="scss" scoped>

    button {
        opacity: 0.6;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        border: 3px dashed var(--text-color);
        border-radius: 3px;
        color: var(--text-color);
        padding: 1rem;
        font-size: 1.5rem;
        text-align: center;
        cursor: pointer;
        transition: opacity 0.5s;

        &:hover {
            opacity: 1;
        }

        svg {
            margin-right: 1rem;
            width: 2rem;
            height: 2rem;
            
            #plus {
                fill: var(--text-color);
            }

        }

    }

</style>