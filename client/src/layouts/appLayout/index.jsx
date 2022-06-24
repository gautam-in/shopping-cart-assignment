import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import ScrollToTop from "../../components/common/scrollToTop";

import "../../global.scss";



const AppLayout = ({children}) => {



	

	return (
		<div className="root">
			<Header id="scroll-to-top"  />
			<main  className="main-container">
			{children}
			</main>
			<ScrollToTop href = "#scroll-to-top"  />
			<Footer />
		</div>
	);
};

export default AppLayout;