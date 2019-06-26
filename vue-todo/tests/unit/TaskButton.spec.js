import { shallowMount } from '@vue/test-utils';
import TaskButton from '@/components/TaskButton';

describe('TaskButton', () => {

    const title = 'Delete Completed';

    const wrapper = (isDelete = false, isDanger = false) => {

        return shallowMount(TaskButton, {

            propsData: {
                title,
                isDelete,
                isDanger
            }
    
        })

    } 

    it('renders the component', () => {

        expect(wrapper().html()).toMatchSnapshot();
        
    })

    it('renders title prop', () => {

        expect(wrapper().find('button').text()).toBe(title);

    })

    it('renders delete icon', () => {

        expect(wrapper(true).find('svg').exists()).toBe(true);

    })

    it('isDelete renders red button', () => {

        expect(wrapper(true).find('button').classes('is-danger')).toBe(true);

    })

    it('isDanger renders red button', () => {

        expect(wrapper(false, true).find('button').classes('is-danger')).toBe(true);

    })

    it('isDelete & isDanger renders red button', () => {

        expect(wrapper(true).find('button').classes('is-danger')).toBe(true);

    })

    it('no isDelete or isDanger renders default button', () => {

        expect(wrapper().find('button').classes('is-danger')).toBe(false);

    })

})