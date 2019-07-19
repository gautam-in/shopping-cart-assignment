import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';
import './login.scss';
import Login from './login.hbs';

var div = document.createElement('div');
div.innerHTML = Login({data:{
	header:{
		logo:{
			src:'static/images/logo.png',
			alt:'Sabka Bazaar',
			link:'home.html'
		},
		nav:{
			primary:[
				{text:'Home',link:'/home.html'},
				{text:'Products',link:'/products.html'}
			],
			secondary:[
				{text:'Sign in',link:'/login.html'},
				{text:'Register',link:'/signup.html'}
			],
			cart:{
				link:'/cart.html',
				src:'static/images/cart.svg',
				alt:'cart'
			}
		}
	}
}});
document.body.appendChild(div);