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
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLeftSide">
            <p>
              Copyright &copy; 2011 - {this.state.todayDate.getFullYear()} Sabka
              Bazaar Grocery Supplies Pvt Ltd
            </p>
          </div>
          <div className="footerRightSide">
            <div className="icon">
              <img src={Facebook} alt="facebook" />
            </div>
            <div className="icon">
              <img src={Instagram} alt="instagram" />
            </div>
            <div className="icon">
              <img src={Twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
