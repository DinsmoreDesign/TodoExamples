/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TextInput from '@/components/TextInput';

const stories = storiesOf('TextInput', module);

stories.addDecorator(withKnobs)
	.add('with props', () => ({
		components: { TextInput },
        template: '<TextInput :label="label" :isTextArea="isTextArea" :value="value" @input="userInput" />',
		props: {
            
            isTextArea: {
                default: boolean('Text Area', false)
            },
			label: {
				default: text('Label', 'Test Label')
            },
            value: {
				default: text('Initial Value', 'Test Value')
            }
			
        },
        methods: {

			userInput: action('input')

        }
	}));
