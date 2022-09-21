import { useRef, useState, FC } from 'react';
import cn from 'classnames';
import { getUuid } from 'utils/helper';
import { ITodo } from 'types';

interface InputProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  onChange: (value: ITodo) => void;
}

const Input: FC<InputProps> = ({ loading, setLoading, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState<string>('');

  const handleNewInput = (key: string | boolean) => {
    if (key == 'Enter' && value.trim().length != 0) {
      setLoading(true);
      setTimeout(() => {
        onChange({ id: getUuid(), text: value, done: false });
        setValue('');
        inputRef.current?.focus();
      }, 700);
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className={cn('input', { ['input-disabled']: loading })}
          ref={inputRef}
          value={value}
          disabled={loading}
          placeholder="Write another todo..."
          onKeyPress={(e) => handleNewInput(e.key)}
          onChange={(e) => setValue(e.target.value)}
          data-testid="todo-input"
        />
        <button
          className="button"
          disabled={value.trim().length == 0 || loading}
          onClick={() => handleNewInput('Enter')}
          data-testid="todo-button">
          +
        </button>
      </div>
    </div>
  );
};

export default Input;
