import type { FC } from 'react';
import cn from 'classnames';
import type { ITodo } from 'types';

import Skeleton from 'components/Skeleton/Skeleton';

interface ListProps {
  loading: boolean;
  items: ITodo[];
  onChange: (list: ITodo[]) => void;
}

const List: FC<ListProps> = ({ loading = false, items, onChange }) => {
  const handleCompletedTodo = (todoId: string) => {
    const newList = items.map((item) => (item.id == todoId ? { ...item, done: true } : item));
    onChange(newList);
  };

  const handleDeleteTodo = (todoId: string) => {
    const newList = items.filter(({ id }) => id != todoId);
    onChange(newList);
  };

  const renderList = (loading: boolean) => {
    if (loading) {
      return <Skeleton />;
    }

    if (items.length == 0) {
      return <p className="empty-list">The list is empty!</p>;
    }

    return items.map(({ id, text, done }) => (
      <li key={id} className="item-container">
        <span
          className={cn('item', { ['item--checked']: done })}
          onClick={() => handleCompletedTodo(id)}>
          {text}
        </span>
        <span className="close-button" onClick={() => handleDeleteTodo(id)}>
          X
        </span>
      </li>
    ));
  };

  return <ul className="list">{renderList(loading)}</ul>;
};

export default List;
