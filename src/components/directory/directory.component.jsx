import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ categories }) => {
  const activeCategories = [].concat(categories)
    .filter(banner => banner.enabled)
    .sort((a, b) => a.order > b.order ? 1 : -1);

  return (
    <DirectoryContainer>
      {activeCategories.map((category, index) => (
        <DirectoryItem key={category.id} category={category} reverse={index % 2 !== 0} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
