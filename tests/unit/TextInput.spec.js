import { shallowMount } from '@vue/test-utils';
import TextInput from '@/components/TextInput';

describe('TextInput', () => {

    const label = 'User Name';
    const value = 'Derek Dinsmore';
    const valueWrapper = shallowMount(TextInput, {

        propsData: {
            label,
            value
        }

    });
    const noValueWrapper = shallowMount(TextInput, {

        propsData: {
            label
        }

    })

    const errorWrapper = shallowMount(TextInput, {

        propsData: {
            label,
            value,
            isTextArea: true,
            hasError: true
        }

    });

    it('renders the component', () => {

        expect(valueWrapper.html()).toMatchSnapshot();
        
    })
    
    it('renders the label', () => {

        expect(valueWrapper.find('label').text()).toBe(label);
        
    })

    it('renders the input and value', () => {

        expect(valueWrapper.find('input').exists()).toBe(true);
        expect(valueWrapper.find('input').element.value).toBe(value);
        
    })

    it('renders the label above input', () => {

        expect(valueWrapper.find('label').classes('show')).toBe(true);
        
    })

    it('renders the label on top of input', () => {

        expect(noValueWrapper.find('label').classes('show')).toBe(false);
        
    })

    it('renders error class', () => {

        expect(errorWrapper.find('div').classes('has-error')).toBe(true);
        
    })

    it('renders textarea', () => {

        expect(errorWrapper.find('textarea').exists()).toBe(true);
        
    })

})