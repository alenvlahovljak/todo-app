import type { FC } from 'react';
import cn from 'classnames';
import type { ITodo } from 'types';

import Skeleton from 'components/Skeleton/Skeleton';

import './List.scss';

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
    console.log({ items });

    if (loading) {
      return <Skeleton />;
    }

    if (items.length == 0) {
      return <span className="empty-list">The list is empty!</span>;
    }

    return items.map(({ id, text, done }) => (
      <li key={id} className="li-item">
        <span className={cn('item', { checked: done })} onClick={() => handleCompletedTodo(id)}>
          {text}
        </span>
        <span className="close" onClick={() => handleDeleteTodo(id)}>
          X
        </span>
      </li>
    ));
  };

  return <ul className="ol-list">{renderList(loading)}</ul>;
};

export default List;
