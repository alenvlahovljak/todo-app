import type { FC } from 'react';

import './Footer.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="copyright">&copy; {new Date().getFullYear()}</div>
      <div className="name">Alen Vlahovljak</div>
    </div>
  );
};

export default Footer;
