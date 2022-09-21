import { render, screen } from '@testing-library/react';

import Input from './Input';

const setup = (loading = false) => {
  render(<Input loading={loading} onChange={() => null} setLoading={() => null} />);

  const input = screen.getByTestId('todo-input');
  const button = screen.getByTestId('todo-button');

  return { input, button };
};

it('should render the Input component onto the screen', () => {
  const { input, button } = setup();
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

it('should have the input enabled when initialized', () => {
  const { input } = setup();
  expect(input).toBeEnabled();
});

it('should have the input disabled when it is loading', () => {
  const { input } = setup(true);
  expect(input).toBeDisabled();
});

it('should have the button disabled when initialized', () => {
  const { button } = setup();
  expect(button).toBeDisabled();
});

it('should have the button disabled when it is loading', () => {
  const { button } = setup(true);
  expect(button).toBeDisabled();
});
