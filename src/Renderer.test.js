import React from 'react';
import renderer from 'react-test-renderer';
import Registration from './components/Registration';

// Test the UI - Snapshot
test('App Snapshot test', () => {
    const component = renderer.create(<Registration />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});