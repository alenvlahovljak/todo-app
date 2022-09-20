import { getUuid } from 'utils/helper';
import type { ITodo } from 'types';

export const getTodos: () => ITodo[] = () => [
  {
    id: getUuid(),
    text: 'Pay bills',
    done: true
  },
  {
    id: getUuid(),
    text: 'Hit the gym',
    done: true
  },
  {
    id: getUuid(),
    text: 'Read a book',
    done: false
  }
];
