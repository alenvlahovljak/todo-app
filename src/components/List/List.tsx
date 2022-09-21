import { useState, FC } from 'react';
import cn from 'classnames';
import type { ITodo } from 'types';

import Skeleton from 'components/Skeleton/Skeleton';

interface ListProps {
  loading: boolean;
  items: ITodo[];
  onChange: (list: ITodo[]) => void;
}

const List: FC<ListProps> = ({ loading = false, items, onChange }) => {
  const [value, setValue] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean | string>(false);

  const handleEditInput = (key: string | boolean, todo: ITodo) => {
    if (key == 'Enter' && value.trim().length != 0) {
      const newList = items.map((item) => (item.id == todo.id ? { ...item, text: value } : item));
      onChange(newList);
      setEditMode(false);
      setValue('');
    }
  };

  const handleCompletedTodo = (todoId: string) => {
    const newList = items.map((item) => (item.id == todoId ? { ...item, done: !item.done } : item));
    onChange(newList);
  };

  const handleEditTodo = (todo: ITodo) => {
    if (value == '') {
      setValue(todo.text);
      setEditMode(todo.id);
      return;
    } else if (editMode == todo.id) {
      handleEditInput('Enter', todo);
    } else {
      setEditMode(false);
      setValue('');
    }
  };

  const handleDeleteTodo = (todoId: string) => {
    const newList = items.filter(({ id }) => id != todoId);
    onChange(newList);
    setEditMode(false);
    setValue('');
  };

  const renderList = () => {
    if (loading) {
      return <Skeleton />;
    }

    if (items.length == 0) {
      return (
        <p className="empty-list" data-testid="empty-list">
          The list is empty!
        </p>
      );
    }

    return items.map(({ id, text, done }) => (
      <li key={id} className="item-container">
        {editMode == id ? (
          <input
            value={value}
            className="edit-input"
            onKeyPress={(e) => handleEditInput(e.key, { id, text, done })}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <span
            className={cn('item', { ['item--checked']: done })}
            onClick={() => handleCompletedTodo(id)}>
            {text}
          </span>
        )}
        <span
          className={cn('list-button edit-button', {
            ['disabled-button']: editMode && editMode != id
          })}
          onClick={() => handleEditTodo({ id, text, done })}>
          {editMode == id ? <div className="edit-todo">+</div> : <div className="pencil" />}
        </span>
        <span className="list-button close-button" onClick={() => handleDeleteTodo(id)}>
          X
        </span>
      </li>
    ));
  };

  return (
    <ul className="list" data-testid="list">
      {renderList()}
    </ul>
  );
};

export default List;
