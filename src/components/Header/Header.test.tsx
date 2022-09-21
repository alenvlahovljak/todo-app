import { render, screen } from '@testing-library/react';

import Header from './Header';

const setup = () => {
  render(<Header title="Header" />);

  return screen.getByTestId('header');
};

it('should render the Header component onto the screen', () => {
  expect(setup()).toBeInTheDocument();
});
