import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  test('renders', () => {
    const component = shallow(<Button />);

    expect(component.exists()).toEqual(true);
  });
});
