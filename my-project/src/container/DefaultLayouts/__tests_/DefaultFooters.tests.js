import React from 'react';
import ReactDOM from 'react-dom';
import DefaultFooters from '../DefaultFooters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultFooters />, div);
  ReactDOM.unmountComponentAtNode(div);
});
