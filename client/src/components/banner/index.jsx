import "./styles.scss";

const Banner = ({details}) => {




    return ( 
        <section className="banner-wrapper">
           <img  src={details?.bannerImageUrl} alt = {details?.bannerImageAlt} />
        </section>
     );
}
 
export default Banner;