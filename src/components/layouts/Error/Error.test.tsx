import { render, screen } from '@testing-library/react';

import Error from './Error';

const setup = () => {
  render(<Error title="Error" />);

  return screen.getByTestId('error');
};

it('should render the Error component onto the screen', () => {
  expect(setup()).toBeInTheDocument();
});
