import { mount, shallowMount } from '@vue/test-utils';
import TodoHeader from '@/components/TodoHeader';
import TaskButton from '@/components/TaskButton';
import FloatingButton from '@/components/FloatingButton';

describe('TodoHeader', () => {

    const data = {
        userName: 'Jane Doe',
        remainingTasks: 75,
        totalTasks: 100
    }

    const wrapper = mount(TodoHeader, {

        propsData: {
            ...data
        }

    });

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders user name', () => {

        expect(wrapper.find('h1').text()).toBe(`${ data.userName }'s Tasks`);

    })

    it('renders buttons', () => {
        
        expect(wrapper.find(FloatingButton).exists()).toBe(true);
        expect(wrapper.find(TaskButton).exists()).toBe(true);

    })

    it('renders remaining tasks', () => {

        expect(wrapper.find('.task-count').text()).toBe(data.remainingTasks.toString());

    })

    it('renders percentage completed', () => {

        expect(wrapper.find('svg').exists()).toBe(true);
        expect(wrapper.find('.percent').text()).toBe('25% done');

    })

    it("doesn't render info bar if no tasks", () => {

        const noTasks = shallowMount(TodoHeader, {

            propsData: {
                userName: data.userName,
                remainingTasks: 0,
                totalTasks: 0
            }
    
        });

        expect(noTasks.find('.info-bar').exists()).toBe(false);

    })

})