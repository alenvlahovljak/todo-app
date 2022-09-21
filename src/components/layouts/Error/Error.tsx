import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  title: string;
}

const Error: FC<ErrorProps> = ({ title = '404 Page' }) => {
  const navigate = useNavigate();

  return (
    <h1 className="error-text" onClick={() => navigate(-1)} data-testid="error">
      ← {title}
    </h1>
  );
};

export default Error;
