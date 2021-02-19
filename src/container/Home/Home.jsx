import React from 'react';
import Header from '../../components/common/Header'
import Cards from './Cards'
import Footer from '../../components/common/Footer';
import './Home.css';
import { withRouter } from 'react-router-dom';
import Carousels from './Carousels'


const data = require('../../server/categories/index.get.json')

class Home extends React.Component {
    state = {
        banners: [],
        categories: []
    }

    fetchAPI = (value) => {
        fetch(`http://localhost:5000/${value}`, {
            method: 'get'
        })
            .then(res => {
                res.json().then(data => {
                    this.setState({ [value]: data })
                })
            })
            .catch(err => {
                console.log(`Cannot find ${value}, Error is: ${err}`)
            })
    }
    componentDidMount() {
        this.fetchAPI('banners');
        this.fetchAPI('categories');
    }
    onBtnClick = (id) => {
        this.props.history.push(`/products/${id}`)
    }
    processCards = () => {
        const length = data.length - 1
        return this.state.categories.map((val, index) => {
            return <Cards
                key={val.id}
                cardContentH5={val.name}
                cardContentSubtitle={val.description}
                image={val.imageUrl}
                mediaPosition={val.order}
                id={val.id}
                buttonText={val.name}
                lastCard={length === index ? true : false}
                onClick={this.onBtnClick} />
        })
    }

    processCarousel = () => {
        return <Carousels banners={this.state.banners} />
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Header />
                <div className="carousel-container">
                    <div></div>
                    <div>
                        {this.processCarousel()}
                    </div>
                    <div></div>
                </div>
                <div className="home-container">
                    <div></div>
                    <div>
                        {this.processCards()}
                    </div>
                    <div></div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(Home);