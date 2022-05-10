import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col } from 'reactstrap';
import withNavigate from '../../hocs/withNavigate';
import { setCategoryFilter } from '../../store/actions';
import { categoriesSelector } from '../../store/selectors';

class Categories extends Component {
    exploreCategory = (categoryId) => {
        const { dispatch, navigate } = this.props;

        dispatch(setCategoryFilter(categoryId));
        navigate('/products', { replace: true });
    };

    render() {
        const { categories } = this.props;

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
                                        <CategoryContent category={category} exploreCategory={this.exploreCategory} />
                                    </>
                                ) : (
                                    <>
                                        <CategoryContent category={category} exploreCategory={this.exploreCategory} />
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
};

const mapStateToProps = createSelector(
    [categoriesSelector],
    (categories) => ({
        categories
    })
);
export default connect(mapStateToProps)(withNavigate(Categories));

const CategoryContent = ({ category, exploreCategory }) => (
    <Col xs={7} className="mt-4">
        <h4>{category.name}</h4>
        <p>{category.description}</p>

        <button type='button' className='themed-btn' onClick={() => exploreCategory(category.id)}>Explore {category.key}</button>
    </Col>
);

const CategoryImage = ({ category }) => (
    <Col xs={5} className="d-flex align-items-center justify-content-center">
        <img src={category.imageUrl} alt={category.name} className="home-category-image" />
    </Col>
);