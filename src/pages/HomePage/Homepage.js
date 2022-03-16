import { Carousel} from 'antd';
import CardCollection from '../../components/cardCollection/CardCollection';
import { connect } from 'react-redux';

const HomePage = ({banner_data,categories}) => {
   
    

    return (
        <div className="cardlist_container container">

            <Carousel className='box' autoplay>
                {
                    banner_data.map((item) => {
                        return <div className="banner_item_image image" key={item.id}>
                            <img alt={item.bannerImageAlt} src={item.bannerImageUrl} className="carosel_img" />
                        </div>



                    })
                }

            </Carousel>
            {/* <div className='border_shadow'/> */}

            <CardCollection categories={categories}/>



        </div>
    )
}

const mapStateToPros = (state, prop) => {
    return {
    banner_data:state.serverReducer.banners,
    categories:state.serverReducer.categories
  
    }
  }

export default connect(mapStateToPros,null) (HomePage);