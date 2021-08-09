import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBanners } from "../../../redux/banner/bannerAction";
import SingleBanner from "./singleBanner";



const Banner = (props) => {

    useEffect(() => {
        props.fetchBanners()

    }, [])
    console.log(props)


    return props.banners.loading ? 
    <div>Loading Banners.....</div> :
    props.banners.error ?
    <div>{props.banners.error}</div> : 
    <div>
        {props.banners && props.banners.banners && 
        props.banners.banners.length > 0 &&
        <SingleBanner 
        banner={props.banners.banners}
        />
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
      banners: state.banners,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchBanners: () => dispatch(fetchBanners()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Banner);