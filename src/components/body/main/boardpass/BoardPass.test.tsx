import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BoardPass from './BoardPass';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoardPass />, div);
  ReactDOM.unmountComponentAtNode(div);
});
