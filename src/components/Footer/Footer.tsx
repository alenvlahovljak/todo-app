import type { FC } from 'react';

const Footer: FC = () => {
  const date = new Date();

  return (
    <div className="container footer">
      <p className="text">&copy; {date.getFullYear()} Alen Vlahovljak</p>
    </div>
  );
};

export default Footer;
