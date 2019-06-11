/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TaskButton from '@/components/TaskButton';

const stories = storiesOf('TaskButton', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { TaskButton },
		template: '<TaskButton @click="clicked" :isDelete="isDelete" :isDanger="isDanger" :title="title" />',
		props: {
			
			title: {
				default: text('Title', 'Delete Completed')
            },
            isDelete: {
				default: boolean('Has Delete Icon', true)
            },
            isDanger: {
				default: boolean('Is Red', false)
			}
			
		},
		methods: {
			
			clicked: action('clicked button')
			
		}
	}));
