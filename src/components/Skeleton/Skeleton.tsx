import type { FC } from 'react';

const Skeleton: FC = () => (
  <div className="skeleton-container">
    <div className="container-loading">
      <div className="skeleton-loading first" />
      <div className="skeleton-loading second" />
    </div>
    <div className="container-loading">
      <div className="skeleton-loading first" />
      <div className="skeleton-loading second" />
    </div>
    <div className="container-loading">
      <div className="skeleton-loading first" />
      <div className="skeleton-loading second" />
    </div>
  </div>
);

export default Skeleton;
