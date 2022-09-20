import type { FC } from 'react';

import './Error.scss';

interface ErrorProps {
  title: string;
}

const Error: FC<ErrorProps> = ({ title = '404 Page' }) => {
  return <div className="error-text">{title}</div>;
};

export default Error;
