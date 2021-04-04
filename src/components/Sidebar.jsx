import React from "react";
import "../styles/sidebar.scss"

function CategoryListItem(props) {
    const name = props.name;
    const id = props.id;

    return(
        <>
            <li>
                <a href="#">
                    <span className="title">{name}</span>
                </a>
            </li>
        </>
    )
  }

export default class Sidebar extends React.Component{
    
    state = {
        loading: true,
        categoriesList: null
    };
    
    async componentDidMount(){
        const url = "http://localhost:8081/categories/";

        let responseJSON = localStorage.getItem(url);
        if(!responseJSON){
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
              });
            
            responseJSON = await response.json();

            localStorage.setItem(url, JSON.stringify(responseJSON));
        }else{
            responseJSON = JSON.parse(responseJSON);
        }

        responseJSON = (responseJSON).sort(function(a, b){
            return a.order - b.order;
        }).filter(a => a.enabled == true);
        
        this.setState({loading: false, categoriesList: responseJSON});
    }

    render() {
        if (this.state.loading || !this.state.categoriesList) {
          return (
            <div className="sidebar">
                <ul>
                    
                </ul>
            </div>
            );
        }
    
        return (
          <>
            <div className="sidebar">
                <ul>
                    {this.state.categoriesList.map((category, index) =>
                            <CategoryListItem key={category.id.toString()} id={category.id.toString()} name={category.name} />
                    )}
                </ul>
            </div>
          </>
        );
      }
}