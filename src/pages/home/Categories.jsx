import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { setCategoryFilter } from '../../store/actions';
import {categoriesSelector} from '../../store/selectors';

function Categories() {
    const categories = useSelector(categoriesSelector);
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

                return (
                    <Fragment key={category.id}>
                        <Row className='home-category-section'>
                            {isRightToLeft ? (
                                <>
                                    <CategoryImage category={category} />
                                    <CategoryContent category={category} exploreCategory={exploreCategory} />
                                </>
                            ) : (
                                <>
                                    <CategoryContent category={category} exploreCategory={exploreCategory} />
                                    <CategoryImage category={category} />
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

const CategoryImage = ({ category }) => (
    <Col xs={6} className="d-flex align-items-center justify-content-center">
        <img src={category.imageUrl} alt={category.name} className="home-category-image" />
    </Col>
);