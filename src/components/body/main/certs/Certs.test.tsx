import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Certs from './Certs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Certs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
