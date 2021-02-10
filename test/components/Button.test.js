import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../../src/components/Button';

let container = null;
const handleClick = jest.fn();
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Button component', () => {
  test('should render with lightgrey default background color', () => {
    const button = renderer.create(
      <Button onClick={i => handleClick(i)} name="0" />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('should render with name equal to +', () => {
    const button = renderer.create(
      <Button onClick={i => handleClick(i)} name="+" />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});

it('renders with name property', () => {
  act(() => {
    render(<Button onClick={i => handleClick(i)} name="=" />, container);
  });

  expect(container.textContent).toBe('=');
});
