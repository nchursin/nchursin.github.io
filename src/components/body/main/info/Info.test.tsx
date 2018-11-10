import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Info from './Info';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Info />, div);
  ReactDOM.unmountComponentAtNode(div);
});
