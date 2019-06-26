export default {

    methods: {

        handleChecked(data) {

            this.loading = true;

            return this.$axios.put('/items/' + data.id, data)
                .then(response => {

                    this.tasks[data.index].done = response.data.done;

                })
                .catch(error => {

                    console.error(error);

                })
                .then(() => {

                    this.loading = false;

                })

        },
        handleEdit({ id = '', title = '', description = '', index = null }) {

            const data = {
                id,
                title,
                description,
                index
            };

            this.modalData = data;
            this.modalComponent = () => import('@/components/EditTask');
            this.showModal = true;

        },
        handleDelete(data) {

            this.loading = true;

            return this.$axios.delete('/items/' + data.id, data)
                .then(response => {

                    this.tasks.splice(data.index, 1);

                })
                .catch(error => {

                    console.error(error);

                })
                .then(() => {

                    this.loading = false;

                })

        },
        handleTaskChange(data) {

            this.loading = true;

            return this.$axios.put('/items/' + data.id, data)
                .then(response => {

                    this.tasks[data.index] = { ...response.data };
                    this.showModal = false;

                })
                .catch(error => {

                    console.error(error);

                })
                .then(() => {

                    this.loading = false;
                    
                })

        },
        deleteCompleted() {

            this.loading = true;

            let doneTasks = [];

            for (const index in this.tasks) {

                if (this.tasks[index].done) {

                    const newTask = {
                        ...this.tasks[index],
                        index: index
                    }

                    doneTasks.push(newTask);

                }

            };

            const ajaxRequests = doneTasks.map(task => {

                return this.$axios.delete('/items/' + task.id);

            })

            Promise.all(ajaxRequests)
                .then(() => {

                    let count = 0;
                    
                    for (const task of doneTasks) {

                        this.tasks.splice(task.index - count, 1);
                        
                        count++

                    }

                })
                .catch(error => {

                    console.error(error);

                })
                .then(() => {

                    this.loading = false;

                })

        }

    }

}