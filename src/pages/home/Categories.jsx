import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { setCategoryFilter } from '../../store/actions';

const categoryImages = require.context('../../static/images/category', true);
function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exploreCategory = (categoryId) => {
        dispatch(setCategoryFilter(categoryId));
        navigate('/products', { replace: true });
    };

    return (
        <>
            {categories.map((category, index) => {
                const isRightToLeft = index % 2 === 0;
                const isNotLastCategory = index < categories.length - 1;
                const image = categoryImages(`.${category.imageUrl.split('/category')[1]}`);

                return (
                    <Fragment key={category.id}>
                        <Row className='home-category-section'>
                            {isRightToLeft ? (
                                <>
                                    <CategoryImage src={image} alt={category.name} />
                                    <CategoryContent category={category} exploreCategory={exploreCategory} />
                                </>
                            ) : (
                                <>
                                    <CategoryContent category={category} exploreCategory={exploreCategory} />
                                    <CategoryImage src={image} alt={category.name} />
                                </>
                            )}
                        </Row>

                        {isNotLastCategory && <hr />}
                    </Fragment>
                )
            })}
        </>
    );
};
export default Categories;

const CategoryContent = ({ category, exploreCategory }) => (
    <Col xs={6} className="mt-4">
        <h4>{category.name}</h4>
        <p>{category.description}</p>

        <button type='button' className='themed-btn' onClick={() => exploreCategory(category.id)}>Explore {category.key}</button>
    </Col>
);

const CategoryImage = ({ src, alt }) => (
    <Col xs={6}>
        <img src={src} alt={alt} className="home-category-image" />
    </Col>
);