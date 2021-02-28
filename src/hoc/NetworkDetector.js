import React, { Component } from 'react';
// import ErrorComponent from '../components/Error';
import LazyLoad from 'react-lazyload';
import NetworkErrorImg from '../assets/images/no-internet.png';
export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
      const { isDisconnected } = this.state;
      return (
        <div>
          { isDisconnected && (<div className="internet-error">
                {/* <ErrorComponent img={NetworkErrorImg} /> */}
                <div className="error-page">
            <div className="err-img">
                <LazyLoad height={50} once>
                    <img alt="Internet is down" src={NetworkErrorImg} />
                </LazyLoad>
            </div>
            <p className="error-info">
                Please check internet connection!
                <br/>
                Sit back and relax we automatically take you to your page once you are online.
            </p>
        </div>
            </div>)
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}