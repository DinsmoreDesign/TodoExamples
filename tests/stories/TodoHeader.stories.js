/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import TodoHeader from '@/components/TodoHeader';

const stories = storiesOf('TodoHeader', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { TodoHeader },
		template: '<TodoHeader :userName="userName" :remainingTasks="remainingTasks" :totalTasks="totalTasks" @click="deleted" />',
		props: {
			
			userName: {
				default: text('User Name', 'Jane Doe')
			},
			remainingTasks: {
				default: number('Remaining Tasks', 24)
			},
			totalTasks: {
				default: number('Total Tasks', 34)
			}
			
		},
		methods: {
			
			deleted: action('clicked delete completed')
			
		}
	}));
