import axios from "axios";
import { Component } from "react";
import HomeStyles from "../styles/home";
import Carousel from "./Banner";
import Categories from "./Categories";


export default class Home extends Component {
    state = {
        slides:[],
        error:false
    }
    // Data for carousel
    carouselSlidesData = [
        {
        content:
            "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        author: "Bane",
        source: "facebook"
        }, {
        content:
            "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
        author: "Ra's Al Ghul",
        source: "Snapchat"
        }, {
        content:
            "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
        author: "Joker",
        source: "facebook"
        }, {
        content:
            "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
        author: "Bruce Wayne",
        source: "facebook"
        }, {
        content:
            "But it's not who you are underneath... it's what you do that defines you.",
        author: "Rachel Dawes",
        source: "twitter"
        }, {
        content:
            "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+"
        }, {
        content:
            "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
        author: "Alfred Pennyworth",
        source: "twitter"
        }
    ];
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
  render(){
    return (
        <HomeStyles>
            <div className="banner-container">
                <Carousel slides={this.state.slides}/>
            </div>
            <div>
                <Categories/>
            </div>
        </HomeStyles>
    )
  }

}