import { render, screen } from '@testing-library/react';

import Content from './Content';

const setup = () => {
  render(
    <Content>
      <span data-testid="content-children" />
    </Content>
  );

  const content = screen.getByTestId('content');
  const children = screen.getByTestId('content-children');

  return { content, children };
};

it('should render the Content component onto the screen', () => {
  const { content } = setup();
  expect(content).toBeInTheDocument();
});

it('should have the Content component containing children', () => {
  const { content, children } = setup();
  expect(content).toContainElement(children);
});
