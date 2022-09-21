import type { FC, ReactNode } from 'react';

import Header from 'components/Header/Header';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';

interface CommonProps {
  children: ReactNode;
}

const Common: FC<CommonProps> = ({ children }) => {
  return (
    <div data-testid="common">
      <Header title="Todo App" />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Common;
