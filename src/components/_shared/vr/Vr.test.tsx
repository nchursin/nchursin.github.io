import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Vr from './Vr';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vr />, div);
  ReactDOM.unmountComponentAtNode(div);
});
