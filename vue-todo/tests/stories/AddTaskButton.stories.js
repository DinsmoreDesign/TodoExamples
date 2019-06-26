/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import AddTaskButton from '@/components/AddTaskButton';

const stories = storiesOf('AddTaskButton', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { AddTaskButton },
		template: '<AddTaskButton @click="clicked" :title="title"/>',
		props: {
			
			title: {
				default: text('Title', 'Add Task')
			}
			
		},
		methods: {
			
			clicked: action('clicked button')
			
		}
	}));
