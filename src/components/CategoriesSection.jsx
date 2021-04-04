import React from "react";
import BannerLoaderImage from "../images/banner_loader.jpg"

function CategoryCard(props) {
    const name = props.name;
    const imageUrl = 'http://localhost:8081' + props.imageUrl;
    const id = props.id;
    const enabled = props.enabled;
    const description = props.description;
    const imageAlign = props.imageAlign;

    if(imageAlign === 'left'){
        return (
            <div className="banner_card">
                <div className="row">
                    <div className="col col-md-4">
                        <div className="product_img">
                            <img src={imageUrl} alt={name} />
                        </div>
                    </div>
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <button className="btn-primary">Explore {name}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="banner_card">
                <div className="row">
                    <div className="col col-md-8">
                        <div className="product_content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <button className="btn-primary">Explore {name}</button>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="product_img">
                            <img src={imageUrl} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default class CategoriesSection extends React.Component{
    
    state = {
        loading: true,
        categories: null
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
        
        this.setState({loading: false, categories: responseJSON});
    }

    render() {
        if (this.state.loading) {
          return (
            <section className="categories_banner_sec">
                <div className="container">
                    <img src={BannerLoaderImage} />
                </div>
            </section>
            );
        }
    
        if (!this.state.categories) {
          return <div>didn't get any categories</div>;
        }
    
        return (
          <>
            <section className="categories_banner_sec">
                <div className="container">
                    {this.state.categories.map((category, index) =>
                            <CategoryCard key={category.id.toString()} imageAlign={ index%2 == 0 ? 'left' : 'right'} id={category.id.toString()} enabled={category.enabled} imageUrl={category.imageUrl} name={category.name} description={category.description} />
                    )}
                </div>
            </section>
          </>
        );
      }
}