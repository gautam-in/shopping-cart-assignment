import React from "react"
import { Carousel } from 'antd';
import Services from "../../Services/service";
import "./HomePage.css"
import Footer from "../Footer/footer";

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            banners: [],
            categories: [],
        }
        this.carousel = React.createRef();
        this.Services = new Services()
    }

    componentDidMount() {
        this.Services.getBanners().then((data) => {
            console.log(data);
            this.setState({ banners: data.data }, () => {
                console.log(this.state.banners);
            })
        })

        this.Services.getCategories().then((data) => {
            let flag = true, category = data.data

            for (let i = 0; i < category.length; i++) {
                if (flag) {
                    category[i].style = { image: "right", text: "left" }
                }
                else {
                    category[i].style = { image: "left", text: "right" }
                }
                flag = !flag
            }

            this.setState({ categories: category })
        })
    }

    next = () => {
        this.carousel.next();
    }
    previous = () => {
        this.carousel.prev();
    }

    getname = (name) => {
        if (name) {
            if (name.match(/\s/g)) {
                return "Explore - " + name.replace(/ /g, "-");
            }
            else {
                return "Explore - " + name
            }
        }
    }

    render() {
        return (
            <header>
                <article className="container">
                    <div className="home-container">
                        <section className="carousel-sec" aria-hidden="true">
                            <Carousel className="carosuel-class" dots={true} ref={node => (this.carousel = node)} autoplay>
                                {this.state.banners.map((data, key) => {
                                    return (
                                        <div>
                                            <img className="carousel-image img" src={data.bannerImageUrl} alt={data.bannerImageAlt} />
                                        </div>
                                    )

                                })}
                            </Carousel>
                            <div className="arrows-icon">
                                <p className="arrows left-arrow" onClick={this.previous} >PREV</p>
                                <p className="arrows right-arrow" onClick={this.next} >NXT</p>
                            </div>

                            {/* <Icon type="right-circle" onClick={this.next} /> */}
                        </section>
                        <section className="row">
                            {this.state.categories.map((data, key) => {
                                return (
                                    <main className="category-data" style={{ padding: "1rem 1rem", width: "100%", marginRight: "2rem" }}>
                                        <div className="category-description" style={{ float: data.style.text }}>
                                            <strong>{data.name}</strong>
                                            <p>{data.description}</p>
                                            <button aria-hidden="true" style={{ cursor: "default" }}>{this.getname(data.name)}</button>
                                        </div>
                                        <div className="category-image" style={{ float: data.style.image }}>
                                            <img className="category-image-style" src={data.imageUrl} alt={data.name} />
                                        </div>
                                    </main>

                                )

                            })}
                        </section>
                    </div>
                </article>
                <div>
                    <Footer />
                </div>
            </header>
        )
    }

}
export default HomePage