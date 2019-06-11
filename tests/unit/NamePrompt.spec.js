import { mount } from '@vue/test-utils';
import NamePrompt from '@/components/NamePrompt';
import TextInput from '@/components/TextInput';

describe('NamePrompt', () => {

    const wrapper = mount(NamePrompt)

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders an error without name', () => {

        wrapper.vm.handleSubmit();

        expect(wrapper.vm.hasError).toBe(true);
        expect(wrapper.find('.error').exists()).toBe(true);
        
    })

    it('renders no error with name', () => {

        wrapper.setData({
            name: 'Test Name'
        });
        wrapper.vm.handleSubmit();

        expect(wrapper.vm.hasError).toBe(false);
        expect(wrapper.find('.error').exists()).toBe(false);
        
    })

    it('emits data on submit', () => {

        const name = 'Test Name';

        wrapper.setData({
            name
        });

        wrapper.vm.handleSubmit();

        expect(wrapper.emitted().submitName[0][0]).toBe(name);
        
    })

})