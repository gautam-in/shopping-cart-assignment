import React, { Component } from "react";
import Facebook from "../../public/static/images/socialIcons/facebook.svg";
import Instagram from "../../public/static/images/socialIcons/instagram.svg";
import Twitter from "../../public/static/images/socialIcons/twitter.svg";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todayDate: new Date(),
    };
  }

  render() {
    return (
      <footer className="footerContainer">
        <section className="footer">
          <article className="footerLeftSide">
            <p>
              Copyright &copy; 2011 - {this.state.todayDate.getFullYear()} Sabka
              Bazaar Grocery Supplies Pvt Ltd
            </p>
          </article>
          <article className="footerRightSide">
            <figure className="icon">
              <img src={Facebook} alt="facebook" />
            </figure>
            <figure className="icon">
              <img src={Instagram} alt="instagram" />
            </figure>
            <figure className="icon">
              <img src={Twitter} alt="twitter" />
            </figure>
          </article>
        </section>
      </footer>
    );
  }
}
export default Footer;
