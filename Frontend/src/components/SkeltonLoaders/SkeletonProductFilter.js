import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

const SkeletonProductFilter = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProductFilter;
