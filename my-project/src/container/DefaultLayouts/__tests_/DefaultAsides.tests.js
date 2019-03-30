import React from 'react';
import ReactDOM from 'react-dom';
import DefaultAsides from '../DefaultAsides';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultAsides />, div);
  ReactDOM.unmountComponentAtNode(div);
});
