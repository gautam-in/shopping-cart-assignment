import axios from "axios";
import { Component } from "react";
import CategoriesStyles from "../styles/categories";
import Category from './Category';
export default class Categories extends Component {
    state = {
        categories: [],
        error: false
    }
    componentDidMount() {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                const list = response.data ? response.data.filter(item => {
                    return item.enabled
                }) : [];
                this.setState({ categories: list });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }
    render() {
        return (
            <CategoriesStyles>
                {
                    this.state.categories.map((category,index) => {
                        if (category.enabled) {
                            return (
                                <Category key={category.id} category={category} flexDirection={(index%2 ==0) ?  'row' : 'row-reverse' } />
                            )
                        }
                        return;
                    })
                }
                { this.state.error &&
                    <p>Unable to Fetch Category List</p>
                }
            </CategoriesStyles>
        )
    }
}