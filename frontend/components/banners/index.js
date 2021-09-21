import Banner from '../banner';

import Gap from '../gap';

import { ShadowDivWrapper } from 'styles/global.styled';
import { BannersWrapper } from 'styles/banners.styled';

import { useCategories } from 'utils/contexts/categories';
import CustomHr from 'components/customHtmlTags/hr';

const Banners = () => {
  const { categories } = useCategories();

  return (
    <BannersWrapper>
      <Gap height="2rem" />
      {categories &&
        categories.length > 0 &&
        categories.map((category, index) => {
          const { name, key, description, imageUrl, id } = category;

          return (
            <div key={key} secondShadow={true} width={100}>
              <Banner
                name={name}
                description={description}
                imageUrl={imageUrl}
                index={index}
                keyMeta={key}
                id={id}
              />
              <CustomHr />
              <Gap height=".rem" />
            </div>
          );
        })}
    </BannersWrapper>
  );
};

export default Banners;
