import React, { Component } from 'react'
import { connect } from 'react-redux'
import endpoints from '../../config/endpoints'
import { setActiveCategory } from '../../store/actions/category'
import { withRouter } from 'react-router-dom'

class Categories extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        fetch(endpoints.FETCH_CATEGORY_LIST)
            .then(res => res.json())
            .then(data => this.setState({
                categories: data
            }))
            .catch(err => console.log('Error while fetching categories : ', err))
    }

    render() {
        return (
            <section className="category-section">
                {this.state.categories.length > 0 &&
                    this.state.categories.map((category, index) => (
                        <div className="category-wrapper" key={category.id}>
                            
                            {/* layout for even rows */}
                            { index % 2 === 0 &&
                                <div className="category">
                                    <img src={endpoints.BASE_URL + category.imageUrl} alt={category.name} />
                                    <div className="details">
                                        <div className="name">
                                            {category.name}
                                        </div>
                                        <div className="description">
                                            {category.description}
                                        </div>
                                        <div className="link">
                                            <button 
                                            aria-label = "Explore more"
                                            onClick={() => {
                                                this.props.setActiveCategory({ category: category.id });
                                                this.props.history.push('/products')
                                            }}>
                                                Explore {category.name}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* layout for odd rows */}
                            { index % 2 !== 0 &&
                                <div className="category">
                                    <div className="details">
                                        <div className="name">
                                            {category.name}
                                        </div>
                                        <div className="description">
                                            {category.description}
                                        </div>
                                        <div className="link">
                                            <button 
                                            aria-label = "Explore more"
                                            onClick={() => {
                                                this.props.setActiveCategory({ category: category.id });
                                                this.props.history.push('/products')
                                            }}>
                                                Explore {category.name}
                                            </button>
                                        </div>
                                    </div>
                                    <img src={endpoints.BASE_URL + category.imageUrl} alt={category.name} />
                                </div>
                            }
                        </div>
                    ))
                }
            </section>
        )
    }
}

export default withRouter(connect(null, { setActiveCategory })(Categories));

