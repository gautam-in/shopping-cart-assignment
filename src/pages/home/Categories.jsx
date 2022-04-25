import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

const categoryImages = require.context('../../static/images/category', true);

class Categories extends Component {
    render() {
        const { categories } = this.props;

        return (
            <Container>
                {categories.map((category, index) => {
                    const isRightToLeft = index % 2 === 0;
                    const isNotLastCategory = index < categories.length - 1;
                    const image = categoryImages(`.${category.imageUrl.split('/category')[1]}`);

                    return (
                        <>
                            <Row key={category.id} className='home-category-section'>
                                {isRightToLeft ? (
                                    <>
                                        <Col xs={6}>
                                            <img src={image} alt={category.name} className="home-category-image" />
                                        </Col>
                                        <Col xs={6} className="mt-4">
                                            <h4>{category.name}</h4>
                                            <p>{category.description}</p>

                                            <button type='button' className='themed-btn'>Explore {category.key}</button>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col xs={6} className="mt-4">
                                            <h4>{category.name}</h4>
                                            <p>{category.description}</p>

                                            <button type='button' className='themed-btn'>Explore {category.key}</button>
                                        </Col>
                                        <Col xs={6}>
                                            <img src={image} alt={category.name} className="home-category-image" />
                                        </Col>
                                    </>
                                )}
                            </Row>

                            {isNotLastCategory && <hr />}
                        </>
                    )
                })}
            </Container>
        );
    };
};

const mapStateToProps = ({ categories }) => ({
    categories
});
export default connect(mapStateToProps)(Categories);