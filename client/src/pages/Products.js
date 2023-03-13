import React,{useContext, useEffect, useState } from 'react'
import useFetch from '../Server/useFetch';
import CartContext from "../store/cart-context";
import ButtonComponent from "../components/UiComponents/ButtonComponent";
import Constants from "../utils.js/Constants";
import '../styles/products.scss'
import { NavLink, useParams } from 'react-router-dom';

const Products = () => {
	document.title = "Products"
	const {data} = useFetch('categories');
	let { categoryId } = useParams();
	const {data:productData} = useFetch(Constants.productsAPI);
	const [userIsDesktop, setUserIsDesktop] = useState(true);
	const [menuOpen,setMenuOpen] = useState(false);
	useEffect(() => {
		window.innerWidth > 960 ? setUserIsDesktop(true) : setUserIsDesktop(false);
	}, [userIsDesktop]);
	const crtCxt = useContext(CartContext);
	const handleBuyNow = (product) => {
		crtCxt.addItems({
			id: product.id,
			name: product.name,
			amount: 1,
			price: product.price,
			image:product.imageURL
		  });
	}
	const newCategories = data.filter(dtf => dtf.order >0).sort((a,b) => a.order-b.order);

	const buttonName = categoryId !== undefined ? newCategories?.filter(object => object.id === categoryId)[0]?.name: newCategories[0]?.name;
	return (
		<div className='products__container'>
			<div className="products__menu">
				<button className="dropdownButton" onClick={() => setMenuOpen((prevState) => !prevState)}><span>{buttonName}</span><span className="arrow">V</span></button>
				<ul className="product__links">
				{newCategories.map(categories => {
					const ctk = categoryId !== undefined &&  categories.id === categoryId ? '': categories.id;
					return <li key={categories.id} className={menuOpen? 'menu-open' : ''}>
							<NavLink to={`/products/${ctk}`}>{categories.name}</NavLink>
						</li>
				})}
				</ul>
			</div>
			<div className="products__listing">
				{productData.filter(product => categoryId !== undefined? product.category === categoryId : true).map(product => 
					<div className='product__item' key={product.id}>
						<div className="product__item__sub">
							<div className="product__title">
								<h3>{product.name}</h3>
							</div>

								<div className='product__data'>
									<div className='image__group'>
										<img src={product.imageURL} alt={product.name}/>
									</div>
									<div className='product__description_group'>
										<div className="product__description">
											<small >{product.description}</small>
										</div>
										<div className="product__amount">
											<small>{`MRP Rs.${product.price}`}</small>
											<ButtonComponent buttonText={userIsDesktop ? 'Buy Now' : `Buy Now @ Rs.${product.price}`} value='buynow' name='buynow' type='button' clickHandler={() => {handleBuyNow(product)}}/>
										</div>
									</div>
									
								</div>
								<div className="tablet__button">
									<ButtonComponent buttonText={userIsDesktop ? 'Buy Now' : `Buy Now @ Rs.${product.price}`} value='buynow' name='buynow' type='button' clickHandler={() => {handleBuyNow(product)}}/>
								</div>

						</div>
						
					</div>)}
			</div>
		</div>
	)
}

export default Products