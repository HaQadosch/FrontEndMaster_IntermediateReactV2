import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Details } from '../components/Details';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details path='/details/1' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Details matches the snapshot', () => {
  const { debug, asFragment } = render(<Details path='/details/1' />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
