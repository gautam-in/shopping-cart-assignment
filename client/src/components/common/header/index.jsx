
import assetObject from "../../../utils/constants/assets";
import Cart from "../../cart";
import "./styles.scss";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MuiButton from '../../common/muiButton';
import {useState} from "react";

const Header = ({id}) => {

	const [user, setUser] = useState(()=>JSON.parse(localStorage.getItem("user"))
	)

	const onClickHandler = ()=>{
		if(user){
			setUser(null)
			localStorage.setItem('user', JSON.stringify(""))
		} else {
			window.location.href = "/signin"
		}
	}


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
					<MuiButton onClick={onClickHandler}  aria-hidden="true" variant="outlined">{user ? 'Logout': 'Login'}</MuiButton>
			</div>

		</header>
	);
};

export default Header;