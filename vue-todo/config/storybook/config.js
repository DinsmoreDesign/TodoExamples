/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue';

import '@/assets/globalStyles.scss';

const wrapperContainer = () => {
  
  return {
    
    template: '<div><story/></div>'
    
  };
  
};

const req = require.context('../../tests/stories', true, /.stories.js$/);

addDecorator(wrapperContainer);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
