import React from 'react';
import Datas from './Datas';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Datas />);
});