import { render, screen } from '@testing-library/react';

import Error from './Error';
import { BrowserRouter } from 'react-router-dom';

const setup = () => {
  render(
    <BrowserRouter>
      <Error title="Error" />
    </BrowserRouter>
  );

  return screen.getByTestId('error');
};

it('should render the Error component onto the screen', () => {
  expect(setup()).toBeInTheDocument();
});
