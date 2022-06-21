
import DesktopCatFilter from "./desktopCatFilter";
import MobileCatFilter from "./mobileCatFilter";

import "./styles.scss";


const CategoryFilter = () => {
	return (
		<section className="categoryfilter-wrapper">
			<MobileCatFilter />
			{/* <DesktopCatFilter /> */}
		</section>
	);
};

export default CategoryFilter;