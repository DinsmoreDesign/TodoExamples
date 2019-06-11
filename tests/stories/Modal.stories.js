/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Modal from '@/components/Modal';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { Modal },
        template: '<Modal @close="close">{{ content }}</Modal>',
		props: {
            
            content: {
                default: text('Content', 'Some Content')
            }
			
        },
        methods: {

			close: action('close')

        }
	}));
