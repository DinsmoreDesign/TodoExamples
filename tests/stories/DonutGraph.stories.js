/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import DonutGraph from '@/components/DonutGraph';

const stories = storiesOf('DonutGraph', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { DonutGraph },
		template: '<DonutGraph :completed="completed" />',
		props: {
			
			completed: {
				default: number('Completed Percent', 72)
			}
			
		}
	}));
