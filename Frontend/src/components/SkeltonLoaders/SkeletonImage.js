import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

const SkeletonImage = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="title" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonImage;
