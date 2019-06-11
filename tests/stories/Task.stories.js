/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, object } from '@storybook/addon-knobs';

import Task from '@/components/Task';
import defaultData from '../unit/stubs/Task.stubs';

const { index, ...data } = defaultData;

const stories = storiesOf('Task', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { Task },
        template: `
            <Task
                :data="data"
                :index="index"
                @checked="clickChecked"
                @edit="clickEdit"
                @delete="clickDelete"
            />
        `,
		props: {
            
            data: {
                default: object('Data', data)
            },
            index: {
				default: number('Index', index)
			}
			
		},
		methods: {
			
            clickChecked: action('Checked Box'),
            clickEdit: action('Clicked Edit'),
            clickDelete: action('Clicked Delete')
			
		}
	}));
