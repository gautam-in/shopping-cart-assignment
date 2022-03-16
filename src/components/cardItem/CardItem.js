import { Button } from "antd";
import { Link } from "react-router-dom";
import './carditem.styles.scss'
import { connect } from "react-redux";
import {setRespectedCategryProds} from '../../redux/serverData/server.actions';

const CardItem = ({ cat,dispatch }) => {
    return (

        <div className='card_container box flex'>
            <div className='card_image'>
                <img src={`${cat.imageUrl}`} alt="img" />
            </div>
            <div className="card_detailes" >
                <h1 className="title">{cat.name}</h1>
                <p className="description">{cat.description}</p>
                
                    <Button  className="explore_btn" size="large" onClick={()=>{dispatch(setRespectedCategryProds([cat]))}}>
                    <Link to="/products">{`Explore ${cat.key}`}</Link>
                    </Button>
                


            </div>

        </div>

    )
}


export default  connect(null,null)(CardItem);