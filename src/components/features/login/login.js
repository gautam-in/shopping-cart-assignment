import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';
import './login.scss';
import Login from './login.hbs';
import validations from './../../../utils/scripts/validations';
import Events from './../../../utils/scripts/registerEventsOnLoad';

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
	},
	signin:{
		title:'Login',
		description:'Get access to your Orders,WishList and Recommendations',
		form:{
			inputs:[
				{
					label:'Email',
					name:'email',
					placeholder:'Email Address',
					type:'email'
				},
				{
					label:'Password',
					name:'psw',
					placeholder:'Password',
					type:'password'
				}
			],
			button:{
				label:'Login'
			}
		}
	}
}});
document.body.appendChild(div);
var inputFields = document.querySelectorAll('input');
inputFields.forEach((el,index,array)=>{
	el.addEventListener('blur',function(e){
		this.classList.add('touched');
		initValidations.call(this,e);
	})
	el.addEventListener('keyup',function(e){
		if(el.classList.contains('touched')){
			initValidations.call(this,e);
		}
		return false;
	})
});
function initValidations(e){
	var name = this.name;
	var placeholder = this.placeholder;
	var data = validations.emptyCheck(e, placeholder);
	if(data){
		switch(name){
			case 'email':
					validations.validateEmail(name,e,placeholder);
					break;
			case 'psw':
					validations.validatePassword(name,e,placeholder);
					break;	 
			default:
			console.log('ok');				
		}
	}
}

Events.cartCountEvent();