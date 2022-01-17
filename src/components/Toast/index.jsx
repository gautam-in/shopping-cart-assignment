import React, { Component } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./Toast.scss";

class Toast extends Component {
  render() {
    return (
      <section className={this.props.toastType + " toast"}>
        <p className="message">{this.props.textMessage}</p>
        <FaWindowClose onClick={this.props.closeToast} />
      </section>
    );
  }
}

export default Toast;
