import { List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";
import { Component } from "react";

class CategoryNav extends Component {
    state = {
        categories: [],
        error: false
    }
    getCategoryList() {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                const list = response.data;
                this.setState({ categories: list });
                // console.log( response );
            })
            .catch(error => {
                console.log('error occured', error);
                this.setState({ error: true });
            });
    }
    componentDidMount() {
        this.getCategoryList()
    }
    categorySelect(item) {
        this.props.categorySelect(item);
    }
    render() {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        this.state.categories.map((category) => {
                            return (
                                <ListItem 
                                key={category.id} button onClick={() => { this.categorySelect(category) }}>
                                    <ListItemText primary={category.name} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        );
    }

}
export default CategoryNav;