import { Button } from "antd";
import { Link } from "react-router-dom";
import './carditem.styles.scss'

const CardItem = ({ cat }) => {
    return (

        <div className='card_container box flex'>
            <div className='card_image'>
                <img src={`${cat.imageUrl}`} alt="img" />
            </div>
            <div className="card_detailes" >
                <h1 className="title">{cat.name}</h1>
                <p className="description">{cat.description}</p>
                <Link to="/products">
                    <Button  className="explore_btn" size="large">
                        {`Explore ${cat.key}`}
                    </Button>
                </Link>


            </div>

        </div>

    )
}

export default CardItem;