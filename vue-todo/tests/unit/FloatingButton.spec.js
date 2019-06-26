import { shallowMount } from '@vue/test-utils';
import FloatingButton from '@/components/FloatingButton';

describe('AddTaskButton', () => {

    const title = 'Add Task';
    const wrapper = shallowMount(FloatingButton, {

        propsData: {
            title,
            isDanger: false
        }

    })

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders title prop', () => {

        expect(wrapper.find('.info-wrapper').text()).toBe(title);

    })

    it('renders add icon', () => {

        expect(wrapper.find('svg').classes('add-icon')).toBe(true);

    })

    it('renders delete icon', () => {

        const deleteWrapper = shallowMount(FloatingButton, {

            propsData: {
                title,
                isDanger: true
            }
    
        })

        expect(deleteWrapper.find('svg').classes('delete-icon')).toBe(true);

    })

})