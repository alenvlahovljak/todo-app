import type { FC } from 'react';

import './Header.scss';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title = 'Header' }) => {
  return (
    <div className="container">
      <div className="logo" />
      <div className="title">{title}</div>
    </div>
  );
};

export default Header;
