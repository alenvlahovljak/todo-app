import type { FC } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title = 'Header' }) => {
  return (
    <div className="container header">
      <div className="logo" />
      <h1 className="heading-1">{title}</h1>
    </div>
  );
};

export default Header;
