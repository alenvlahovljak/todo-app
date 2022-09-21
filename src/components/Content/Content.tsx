import type { FC, ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Content: FC<HeaderProps> = ({ children }) => <div className="content">{children}</div>;

export default Content;
