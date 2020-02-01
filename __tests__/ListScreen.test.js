import React from 'react';
import renderer from 'react-test-renderer';
import ListScreen from '../screens/ListScreen'

test('List snapShot', ()=> {
  const snap = renderer.create(
    <ListScreen />
  );
  let tree = snap.toJSON();
  expect(tree).toMatchSnapshot();
});