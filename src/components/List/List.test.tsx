import { render, screen } from '@testing-library/react';

import List from './List';

import { getTodos } from 'fixtures/todos';

const setup = (loading = false, items = getTodos()) => {
  render(<List items={items} loading={loading} onChange={() => null} />);

  let empty = null;
  let skeleton = null;

  const list = screen.getByTestId('list');

  if (items.length == 0) {
    empty = screen.getByTestId('empty-list');
  }

  if (loading) {
    skeleton = screen.getByTestId('skeleton');
  }

  return { list, empty, skeleton };
};

it('should have be the list when initialized', () => {
  const { list } = setup();
  expect(list).toBeInTheDocument();
});

it('should have be the empty list when the list is empty', () => {
  const { empty } = setup(false, []);
  expect(empty).toBeInTheDocument();
});

it('should have be the skeleton when it is loading', () => {
  const { skeleton } = setup(true);
  expect(skeleton).toBeInTheDocument();
});
