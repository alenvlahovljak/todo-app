import type { FC } from 'react';

import './Skeleton.scss';

interface SkeletonProps {}

const Skeleton: FC<SkeletonProps> = () => {
  return (
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
};

export default Skeleton;
