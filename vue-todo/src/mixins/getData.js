export default {

    data() {
        return {

            theme: 'dark',
            userName: '',
            tasks: [],
            loading: false

        }
    },
    computed: {

        remainingTasks() {
    
            let count = 0;
            
            for (const task of this.tasks) {
                
                if (!task.done) count++;

            }

            return count;

        },
        totalTasks() {

            return this.tasks.length;

        }

    },
    watch: {

        theme(newVal) {

            // If our local theme value changes, set it in localStorage and then change the data-theme to switch colors:
            localStorage.setItem('theme', newVal);
            document.documentElement.setAttribute('data-theme', newVal);

        }

    },
    created() {

        this.getData();

    },
    methods: {

        getData() {

            // On load, query localStorage and set the theme:
			const theme = localStorage.getItem('theme');

			if (theme) {

				this.theme = theme;

			}

			// Query userName, if it exists, set it - otherwise, prompt for userName:
			const userName = localStorage.getItem('userName');

			if (userName) {

				this.userName = userName;

			} else {

                this.modalComponent = () => import('@/components/NamePrompt');
                this.allowModalClose = false;
				this.showModal = true;

			}

            this.loading = true;

			// Get all existing items from API:
			this.$axios.get('/items/')
				.then(response => {

                    this.tasks = response.data;

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