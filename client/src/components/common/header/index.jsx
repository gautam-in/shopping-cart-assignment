
import assetObject from "../../../utils/constants/assets";
import Cart from "../../cart";
import "./styles.scss";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const Header = () => {
	return (
		<header className="header-wrapper">
			<div className="header-container">
			<a href="/">
				<img src={assetObject.logo.src}  alt={assetObject.logo.alt} />
			</a>
			<nav className="nav-container">
				<a href="/" > <CottageOutlinedIcon/>Home</a>
				<a href="/products" > <Inventory2OutlinedIcon/>  Products</a>
			</nav>
			</div>
			
			<Cart />
		</header>
	);
};

export default Header;