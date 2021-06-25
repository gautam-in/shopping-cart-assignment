import { useEffect, useState } from "react";
import DesktopSideNav from "./DesktopSideNav";
import MobileCategoryNav from "./MobileCategoryNav";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";


function SideNavBar({ categories, fetchCategories }) {

  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window?.innerWidth > 767);
  };

  useEffect(() => {
    (async () => {
      await fetchCategories();
       updateMedia();
      window.addEventListener("resize", updateMedia);
    })();
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <>
    {isDesktop ? <DesktopSideNav categories={categories} /> :<MobileCategoryNav categories={categories} /> }
        
        
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};
export default connect(mapStateToProps, {
  fetchCategories,
})(SideNavBar);
