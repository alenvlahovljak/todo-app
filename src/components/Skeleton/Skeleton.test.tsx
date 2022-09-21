import { render, screen } from '@testing-library/react';

import Skeleton from './Skeleton';

const setup = () => {
  render(<Skeleton />);

  return screen.getByTestId('skeleton');
};

it('should render the Skeleton component onto the screen', () => {
  expect(setup()).toBeInTheDocument();
});
