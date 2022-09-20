import type { FC, ReactNode } from 'react';

import './Content.scss';

interface HeaderProps {
  children: ReactNode;
}

const Content: FC<HeaderProps> = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;
