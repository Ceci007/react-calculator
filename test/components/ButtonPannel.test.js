import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPannel from '../../src/components/ButtonPannel';

describe('ButtonPannel component should ', () => {
  const handleClick = jest.fn();
  test('should render buttons in group', () => {
    const buttonPannel = renderer.create(<ButtonPannel clickHandler={i => handleClick(i)} />);
    expect(buttonPannel.toJSON()).toMatchSnapshot();
  });
});
