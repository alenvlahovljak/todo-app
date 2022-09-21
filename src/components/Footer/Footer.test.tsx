import { render, screen } from '@testing-library/react';

import Footer from './Footer';

const setup = () => {
  render(<Footer />);

  return screen.getByTestId('footer');
};

it('should render the Footer component onto the screen', () => {
  expect(setup()).toBeInTheDocument();
});
