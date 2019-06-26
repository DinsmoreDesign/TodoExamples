import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal';

describe('Modal', () => {

    const wrapper = shallowMount(Modal)

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders the close button if allowed', () => {

        expect(wrapper.find('.modal-close').exists()).toBe(true);
        
    })

    it('emits close when background is clicked', () => {

        wrapper.find('.modal-background').trigger('click');
        
        const emitsClose = wrapper.emitted().close ? true : false;

        expect(emitsClose).toBe(true);
        
    })

    it('emits close when button is clicked', () => {

        wrapper.find('.modal-close').trigger('click');

        const emitsClose = wrapper.emitted().close ? true : false;

        expect(emitsClose).toBe(true);
        
    })

    it('does not render the close button if not allowed', () => {

        wrapper.setProps({
            allowClose: false
        })

        expect(wrapper.find('.modal-close').exists()).toBe(false);
        
    })

})