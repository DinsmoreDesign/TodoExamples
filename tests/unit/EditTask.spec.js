import { mount, shallowMount } from '@vue/test-utils';
import EditTask from '@/components/EditTask';
import TextInput from '@/components/TextInput';
import TaskButton from '@/components/TaskButton';

describe('EditTask', () => {

    const data = {
        id: '12356789',
        title: 'Test Title',
        description: 'Test Description',
        index: 14
    }
    const wrapper = mount(EditTask, {

        propsData: { data }

    })
    const errorWrapper = shallowMount(EditTask, {

        propsData: {
            data: {
                id: data.id,
                title: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et lorem sem. Cras eu augue non ex lobortis finibus ut in sem. Fusce sed ligula ut ipsum porttitor ullamcorper. Aliquam commodo mattis neque vel congue. In bibendum eleifend convallis. Cras eget facilisis turpis. Maecenas id ex et lacus fermentum dictum in tempor lectus. Maecenas dapibus vulputate leo, non pulvinar nulla varius sit amet. Ut eu neque risus. Ut fringilla ligula elit, vitae laoreet massa gravida vel. Nunc pretium pulvinar lorem vitae mollis.'
            }
        }

    })

    it('renders the component', () => {

        expect(wrapper.html()).toMatchSnapshot();
        
    })

    it('renders child components', () => {

        expect(wrapper.find(TextInput).exists()).toBe(true);
        expect(wrapper.find(TaskButton).exists()).toBe(true);

    })

    it('renders an input', () => {

        expect(wrapper.find('input').exists()).toBe(true);
        
    })

    it('renders a textarea', () => {

        expect(wrapper.find('textarea').exists()).toBe(true);
        
    })

    it('has errors with bad data', () => {

        errorWrapper.vm.runValidation();

        expect(errorWrapper.vm.hasTitleError).toBe(true);
        expect(errorWrapper.vm.hasDescriptionError).toBe(true);
        
    })

    it('emits submitted data', () => {

        wrapper.vm.handleSubmit();

        expect(wrapper.emitted().submitEdit[0][0].id).toBe(data.id);
        expect(wrapper.emitted().submitEdit[0][0].title).toBe(data.title);
        expect(wrapper.emitted().submitEdit[0][0].description).toBe(data.description);
        expect(wrapper.emitted().submitEdit[0][0].index).toBe(data.index);
        
    })

})