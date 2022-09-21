import type { FC } from 'react';

import ErrorLayout from 'components/layouts/Error/Error';

const ErrorView: FC = () => {
  return <ErrorLayout title="404 Page" data-testid="error-layout" />;
};

export default ErrorView;
