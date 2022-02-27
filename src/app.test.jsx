import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';

describe('App', () => {
  test('Should rendered properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app-container').exists()).toBe(true);
  });
});
