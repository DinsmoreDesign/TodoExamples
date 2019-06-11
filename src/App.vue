<template>

	<div id="app">

		<Modal
			v-if="showModal"
			:allowClose="allowModalClose"
			@close="closeModal"
		>

			<component
				:is="modalComponent"
				:data="modalData"
				@submitName="handleNameChange"
				@submitEdit="handleTaskChange"
				@addTask="handleAddTask"
				@close="closeModal"
			/>

		</Modal>

		<div class="content">

			<TodoHeader
				@click="deleteCompleted"
				:userName="userName"
				:remainingTasks="remainingTasks"
				:totalTasks="totalTasks"
			/>

			<section class="grid">

				<div class="add-block">

					<AddTaskButton
						class="col-4"
						title="Add Task"
						@click="handleEdit"
					/>

				</div>

				<div
					v-if="tasks.length > 0"
					v-for="(task, index) of tasks"
					:key="index"
				>

					<LoadingTask v-if="loading || !userName" />

					<Task v-else
						:data="task"
						:index="index"
						@checked="handleChecked"
						@edit="handleEdit"
						@delete="handleDelete"
					/>
					
				</div>

			</section>

			<button
				type="button"
				@click="theme = theme === 'light' ? 'dark' : 'light'"
			>
				{{ theme === 'light' ? 'Change to Dark Mode' : 'Change to Light Mode' }}
			</button>

		</div>

	</div>

</template>






<script>

	import { AddTaskButton, LoadingTask, Modal, Task, TodoHeader } from '@/components';
	import getData from './mixins/getData';
	import handleTaskChanges from './mixins/handleTaskChanges';

	export default {

		name: 'App',
		components: {

			AddTaskButton,
			LoadingTask,
			Modal,
			Task,
			TodoHeader

		},
		mixins: [

			getData,
			handleTaskChanges

		],
		data() {
			return {

				showModal: false,
				modalComponent: null,
				modalData: {},
				allowModalClose: true

			}
		},
		methods: {

			handleNameChange(val) {

				this.userName = val;

				localStorage.setItem('userName', val);

				this.showModal = false;

			},
			handleAddTask(data) {

				return this.$axios.post('/items', data)
					.then(response => {

						this.tasks.push(response.data);
						this.showModal = false;

					})
					.catch(error => {

						console.error(error);

					})

			},
			closeModal() {

				this.showModal = false;
				this.allowModalClose = true;

			}

		}

	}

</script>






<style lang="scss">

	@import './assets/globalStyles.scss';

</style>

<style lang="scss" scoped>

	.content {
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		.grid {
			flex: 1;
			margin: 1rem 0;			
		}

		.add-block {
			display: flex;
			max-height: 143px;
		}

	}

	button {
		background-color: var(--light-purple);
		border: 0;
		border-top: 3px solid transparent;
		color: #FFF;
		padding: 1rem;
		cursor: pointer;
		transition: all 0.5s;

		&:hover {
			background-color: #FFF;
			border-top: 3px solid var(--light-purple);
			color: var(--light-purple);	
		}

	}

</style>