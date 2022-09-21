import type { FC } from 'react';

interface ErrorProps {
  title: string;
}

const Error: FC<ErrorProps> = ({ title = '404 Page' }) => {
  return (
    <h1 className="error-text" data-testid="error">
      {title}
    </h1>
  );
};

export default Error;
