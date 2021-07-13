import { useRouter } from 'next/router';
import Image from 'next/image';
import css from '../../styles/Products.module.css';
import products from '../../backend/server/products/index.get.json';
import categories from '../../backend/server/categories/index.get.json';
import Layout from '../../components/Layout';
import { Card, Button } from 'react-bootstrap';
import ActiveLink from '../../components/ActiveLink';
import Router from 'next/router';
import { useContext } from 'react';
import { CartContext } from '../../components/Cart/CartContext';
import { TokenContext } from "../../components/TokenContext";
import { db } from '../../firebase';

export default function CategoryProduct() {

    const router = useRouter();
    const categoryId = router.query.id;

    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
    const { user } = useContext(TokenContext);

    const addProduct = (id, product) => {
        if (user) {
            dispatch({ type: 'ADD_TO_CART', id: id, product })
        }
        else {
            Router.push(`/login`,null, { shallow: true });
        }
    }

    const displayContent = products.map((product) => {
        const { id, name, price, description, imageURL } = product;
        if (categoryId === product.category) {
            return (
                <Card key={id} style={{ width: '18rem', padding: '20px' }}>
                    <Card.Title>{name}</Card.Title>
                    <Image className='card-img-top' src={require(`../../backend${imageURL}`).default} alt={name} />
                    <Card.Body>
                        <Card.Text style={{ backgroundColor: '#F5F5F5', padding: '5px' }}>
                            {description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { addProduct(product.id, product) }}>Buy Now @ ₹{price}</Button>
                    </Card.Body>
                </Card>
            )
        }
    })

    const productCategory = categories.map((category) => {
        const { id, name, key, enabled } = category;
        if (enabled) {
            return (
                <ActiveLink key={key} onClick={ user &&
                    db?.collection('CartData')?.doc(user).set({
                        CartProducts: {
                            shoppingCart: shoppingCart,
                            totalPrice: totalPrice,
                            totalQty: totalQty,
                        }
                    }).then(() => { }).catch(err => setError(err.message))
                } href={`/products/${id}`} >{name}</ActiveLink>
            )
        }
    })

    return (
        <Layout>
            <div className={css.container}>
                <div className={css.sidebar}>
                    {productCategory}
                </div>

                <div className={css.main}>
                    {displayContent}
                </div>
            </div>
        </Layout>
    )
}
