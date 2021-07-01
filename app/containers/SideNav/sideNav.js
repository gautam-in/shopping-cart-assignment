import PropTypes from 'prop-types';
import DesktopSideNav from '../../components/DesktopSideNav';
import MobileCategoryNav from '../../components/MoblleSideNav';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../store/actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function SideNavBar({ categories, fetchCategories }) {
  const router = useRouter();
  const categoryQuery = router.query.category;
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window?.innerWidth > 767);
  };

  useEffect(() => {
    fetchCategories();
    updateMedia();
   window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <>
    {isDesktop ? <DesktopSideNav categories={categories} /> :<MobileCategoryNav categories={categories} categoryQuery={categoryQuery} /> }    
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};
SideNavBar.propTypes = {
  categories: PropTypes.array,
  fetchCategories: PropTypes.func
}
export default connect(mapStateToProps, {
  fetchCategories,
})(SideNavBar);
