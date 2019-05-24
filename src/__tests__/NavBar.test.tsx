import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import serializer from 'jest-emotion';
import { NavBar } from '../components/NavBar';

expect.addSnapshotSerializer(serializer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('NavBar matches the snapshot', () => {
  const { debug, asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
