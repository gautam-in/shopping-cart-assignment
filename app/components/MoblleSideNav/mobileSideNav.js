import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SideNavListStyles from '../Shared/Styles/sideNavLists.styles';
import {
  MobileNavSelectedStyle,
  MobileCategoryStyle,
} from './mobileSideNav.styles';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {PRODUCTS} from './mobileSIdeNav.constants'

function MobileCategoryNav({ categories }) {

  const router = useRouter();
  const categoryQuery = router.query.category;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(categories?.find((category) => category.id === categoryQuery));
  }, [categoryQuery, categories]);

  const onselectionchange = (e, category) => {
    e.stopPropagation();
    setOpen(false);
    if (category.key === 'products') {
      router.push('/products');
    } else {
      router.push(`/products?category=${category.id}`);
    }
  };

  const renderCategoryList = (categories) => {
    return categories?.map((category) => {
      if (category.id === categoryQuery) return;
      return (
        <SideNavListStyles
          key={category.id}
          order={category.order}
          onClick={(e) => onselectionchange(e, category)}
        >
          {category.name}
        </SideNavListStyles>
      );
    });
  };
  if (categories) {
    return (
      <MobileCategoryStyle onClick={() => setOpen(!open)} open={open}>
        <MobileNavSelectedStyle>
          {selected ? selected.name : 'Products'}
          {open ? (
            <FontAwesomeIcon icon={faChevronUp} className="chevron-icon" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          )}
        </MobileNavSelectedStyle>

        <ul>
          {renderCategoryList(categories)}
          <SideNavListStyles
            key="all-products"
            active={!categoryQuery}
            onClick={(e) => onselectionchange(e, PRODUCTS)}
          >
            Products
          </SideNavListStyles>
        </ul>
      </MobileCategoryStyle>
    );
  } else {
    return <div>Loading...</div>;
  }
}
MobileCategoryNav.propTypes = {
  categories: PropTypes.array
}
export default MobileCategoryNav;
