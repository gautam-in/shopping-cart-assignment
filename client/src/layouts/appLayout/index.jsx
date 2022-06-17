import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import "../../global.scss";

const AppLayout = ({children}) => {
	return (
		<div className="root">
			<Header />
			<main className="main-container">
			{children}
			</main>
			<Footer />
		</div>
	);
};

export default AppLayout;