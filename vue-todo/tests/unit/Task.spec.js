import { shallowMount } from '@vue/test-utils';

import Task from '@/components/Task';
import defaultData from './stubs/Task.stubs';

const { index, ...data } = defaultData;

describe('Task', () => {

    const wrapper = shallowMount(Task, {

        propsData: {
            data: data,
            index: index
        }

    });

    const noDescWrapper = shallowMount(Task, {

        propsData: {
            data: {
                title: data.title,
                created: data.created,
                id: data.id,
                done: data.done
            },
            index: index
        }

    });

    const doneWrapper = shallowMount(Task, {

        propsData: {
            data: {
                ...data,
                done: true
            },
            index: index
        }

    });

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    });

    it('renders title prop', () => {

        expect(wrapper.find('.title-block h3').text()).toBe(data.title);

    });

    it('renders description prop', () => {

        expect(wrapper.find('.description').text()).toBe(data.description);

    });

    it("doesn't render description block if omitted", () => {

        expect(noDescWrapper.find('.description').exists()).toBe(false);

    });

    it('converts and renders date correctly', () => {

        expect(wrapper.find('.date').text()).toBe('2d');

    });

    it('renders id prop', () => {

        expect(wrapper.props().data.id).toBe(data.id);

    });

    it("reduces opacity if done", () => {

        expect(doneWrapper.find('.completed').exists()).toBe(true);

    });

    it("adds 'completed' if done", () => {

        const noDescWrapper = shallowMount(Task, {

            propsData: {
                data: {
                    ...data,
                    done: true
                },
                index: index
            }
    
        });

        expect(noDescWrapper.find('.date').text()).toBe('completed');

    });

    it("emits done when checked", () => {

        wrapper.find('.checkbox').trigger('click');

        expect(wrapper.emitted().checked[0][0].done).toBe(true);

    });

    it("emits data when edit is clicked", () => {

        wrapper.vm.emitEvent('edit');

        expect(wrapper.emitted().edit[0][0].title).toBe(data.title);
        expect(wrapper.emitted().edit[0][0].description).toBe(data.description);
        expect(wrapper.emitted().edit[0][0].created).toBe(data.created);
        expect(wrapper.emitted().edit[0][0].id).toBe(data.id);
        expect(wrapper.emitted().edit[0][0].done).toBe(data.done);
        expect(wrapper.emitted().edit[0][0].index).toBe(index);

    });

    it("emits data when delete is clicked", () => {

        wrapper.vm.emitEvent('delete');

        expect(wrapper.emitted().edit[0][0].title).toBe(data.title);
        expect(wrapper.emitted().edit[0][0].description).toBe(data.description);
        expect(wrapper.emitted().edit[0][0].created).toBe(data.created);
        expect(wrapper.emitted().edit[0][0].id).toBe(data.id);
        expect(wrapper.emitted().edit[0][0].done).toBe(data.done);
        expect(wrapper.emitted().edit[0][0].index).toBe(index);

    });

})