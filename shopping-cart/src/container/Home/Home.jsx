import React from 'react';
import Header from '../../components/common/Header'
import Carousel from './Carousel'
import Footer from '../../components/common/Footer'

const data = require('../../server/categories/index.get.json')

class Home extends React.Component {
    processCards = () => {
        const length = data.length - 1
        return data.map((val, index) => {
            return <Carousel
                key={val.id}
                cardContentH5={val.name}
                cardContentSubtitle={val.description}
                image={val.imageUrl}
                mediaPosition={val.order}
                buttonText={val.name}
                lastCard={length === index ? true : false} />
        })
    }


    render() {
        return (
            <div>
                <Header />
                {this.processCards()}
                <Footer />
            </div >

        );
    }
}

export default Home;