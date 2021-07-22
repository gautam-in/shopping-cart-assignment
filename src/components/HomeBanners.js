import React, { Component } from "react";

class HomeBanners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  onPrev = () => {
    this.setState({
      activeIndex:
        this.state.activeIndex == 0
          ? this.props.bannerList.length - 1
          : this.state.activeIndex - 1,
    });
  };

  onNext = () => {
    this.setState({
      activeIndex:
        this.state.activeIndex == this.props.bannerList.length - 1
          ? 0
          : this.state.activeIndex + 1,
    });
  };

  render() {
    return (
      <section className="carousel">
        {this.props.bannerList && this.props.bannerList.length > 0 && (
          <>
            <button
              type="button"
              className="prev"
              onClick={this.onPrev}
              onKeyPress={this.onPrev}
              tabIndex={0}
            >
              Prev
            </button>
            <img
              className="banner-image"
              src={this.props.bannerList[this.state.activeIndex].bannerImageUrl}
              alt={this.props.bannerList[this.state.activeIndex].bannerImageAlt}
              height="150"
              width="500"
            />
            <article className="banner-dots">
              {this.props.bannerList.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.id == this.props.bannerList[this.state.activeIndex].id
                      ? "banner-dot active"
                      : "banner-dot"
                  }
                />
              ))}
            </article>
            <button
              type="button"
              className="next"
              onClick={this.onNext}
              onKeyPress={this.onNext}
              tabIndex={0}
            >
              NEXT
            </button>
          </>
        )}
      </section>
    );
  }
}

export default HomeBanners;
