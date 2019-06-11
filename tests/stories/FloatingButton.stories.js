/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import FloatingButton from '@/components/FloatingButton';

const stories = storiesOf('FloatingButton', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { FloatingButton },
        template: `
            <FloatingButton
                :isDanger="isDanger"
                :title="title"
                @click="clicked"
            />
        `,
		props: {
            
            isDanger: {
                default: boolean('isDanger', false)
            },
            title: {
                default: text('Title', 'Add Task')
            }
			
		},
		methods: {
			
            clicked: action('clicked')
			
		}
	}));
