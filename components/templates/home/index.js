import axios from "axios";
import { Component } from "react";
import Banner from "../../molecules/banner";
import Categories from "../../molecules/categories";
import HomeStyles from "./index.style";


class HomePage extends Component {
    state = {
        slides: [],
        error: false
    }
    componentDidMount() {
        axios.get('http://localhost:5000/banners')
            .then(response => {
                const list = response.data;
                this.setState({ slides: list });
                // console.log( response );
            })
            .catch(error => {
                console.log('error occured', error);
                this.setState({ error: true });
            });
    }
    render() {
        return (
            <HomeStyles>
                <div className="banner-container">
                    <Banner slides={this.state.slides} />
                </div>
                <div role="main">
                    <Categories />
                </div>
            </HomeStyles>
        )
    }
}
export default HomePage;