import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Error from './Error';

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

it('should redirect to /', async () => {
  fireEvent.click(setup());
  await waitFor(() => {
    expect(window.location.pathname).toBe('/');
  });
});
