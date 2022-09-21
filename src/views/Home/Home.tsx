import { lazy, useState, useEffect, FC } from 'react';
import { ITodo } from 'types';

import CommonLayout from 'components/layouts/Common/Common';
import List from 'components/List/List';

const Input = lazy(() => import('components/controls/Input/Input'));

import { getTodos } from 'fixtures/todos';

const DashboardView: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleOnChange = (todo: ITodo) => {
    setTodos([todo].concat(todos));
    setLoading(false);
  };

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <CommonLayout>
      <Input loading={loading} setLoading={setLoading} onChange={handleOnChange} />
      <List loading={loading} items={todos} onChange={setTodos} />
    </CommonLayout>
  );
};

export default DashboardView;
