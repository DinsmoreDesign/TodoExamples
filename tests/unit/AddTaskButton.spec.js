import { shallowMount } from '@vue/test-utils';
import AddTaskButton from '@/components/AddTaskButton';

describe('AddTaskButton', () => {

    const title = 'Add Task';
    const wrapper = shallowMount(AddTaskButton, {

        propsData: {
            title
        }

    })

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders title prop', () => {

        expect(wrapper.find('button').text().includes(title)).toBe(true);

    })

})