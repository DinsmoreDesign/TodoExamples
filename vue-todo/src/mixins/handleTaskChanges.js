export default {

    methods: {

        async handleChecked(data) {
            
            try {

                this.loading = true;

                const {
                    data: {
                        updated
                    }
                } = await this.$axios.put('/api/task', data);

                if (!updated) { throw 'There was a problem updating the task' };

                this.tasks[data.id].done = data.done;

                return this.loading = false;

            } catch (error) {

                console.log(error);

                return this.loading = false;

            };

        },
        handleEdit({ id = null, title = '', description = '', done = false, created = '' }) {

            const data = {
                id,
                created,
                title,
                description,
                done
            };

            this.modalData = data;
            this.modalComponent = () => import('@/components/EditTask');
            this.showModal = true;

        },
        async handleDelete(data) {

            try {
                
                this.loading = true;

                await this.$axios.delete('/api/task/' + data.id, data);

                this.tasks.splice(data.id, 1);

                return this.loading = false;

            } catch (error) {

                console.log(error);

                return this.loading = false;

            };

        },
        async handleTaskChange(data) {

            try {
                
                this.loading = true;

                const {
                    data: {
                        updated
                    }
                } = await this.$axios.put('/api/task', data);

                if (!updated) { throw 'There was a problem updating the task' };

                this.tasks[data.id] = { ...data };

                this.showModal = false;
                
                return this.loading = false;

            } catch (error) {

                console.log(error);

                return this.loading = false;

            };

        },
        async deleteCompleted() {
            
            let doneTasks = [];

            for (const index in this.tasks) {

                if (this.tasks[index].done) {

                    const newTask = {
                        ...this.tasks[index],
                        index: index
                    }

                    doneTasks.push(newTask);

                };

            };

            try {
                
                this.loading = true;

                await Promise.all(doneTasks.map(task => {

                    return this.$axios.delete('/api/task/' + task.id);
    
                }));

                let count = 0;
                
                for (const task of doneTasks) {

                    this.tasks.splice(task.index - count, 1);
                    
                    count++

                };

                return this.loading = false;

            } catch (error) {

                console.log(error);

                return this.loading = false;

            };

        }

    }

}