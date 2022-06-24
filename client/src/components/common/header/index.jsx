
import assetObject from "../../../utils/constants/assets";
import Cart from "../../cart";
import "./styles.scss";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MuiButton from '../../common/muiButton';

const Header = ({id}) => {
	return (
		<header id={id} className="header-wrapper">
			<div className="header-container-one">
				<a href="/" >
					<img src={assetObject.logo.src} alt={assetObject.logo.alt} />
				</a>
				<nav className="nav-container">
					<a href="/" > <CottageOutlinedIcon />Home</a>
					<a href="/products" > <Inventory2OutlinedIcon />  Products</a>
				</nav>
			</div>

			<div className="header-container-two">
				<Cart />
				<a href="/signin">
					<MuiButton variant="outlined">Login</MuiButton>
				</a>

			</div>

		</header>
	);
};

export default Header;