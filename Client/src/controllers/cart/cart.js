import './cart.scss';
import Handlebars from 'handlebars';

function Cart() {
    Handlebars.registerHelper('if_eq', function (a, b, opts) {
        console.log(a, b)
    });
}
export { Cart }