import { render, screen } from '@testing-library/react';

import Common from './Common';

const setup = () => {
  render(
    <Common>
      <span data-testid="common-children" />
    </Common>
  );

  const common = screen.getByTestId('common');
  const children = screen.getByTestId('common-children');

  return { common, children };
};

it('should render the Common component onto the screen', () => {
  const { common } = setup();
  expect(common).toBeInTheDocument();
});

it('should have the Common component containing children', () => {
  const { common, children } = setup();
  expect(common).toContainElement(children);
});
