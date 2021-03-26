import React,{Component} from 'react';
import { CategoriesData } from '../../_services/server/categories';
import './style.scss';

export default class ProductList extends Component {
    
    despFirst(item){
        return(
            <div className='row'>
            <div className='column'>
                <div className='desp'>
                    <h3 className='name'>{item.name}</h3>
                    <div className='description'>{item.description}</div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className="button">Explore {item.key}</button>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='img' >
                    <img src={item.imageUrl} height='90%' width='60%' style={{padding:'10px'}} />
                </div>
            </div>
        </div> 
        )
    }
    imgFirst(item){
        return(
            <div className='row'>
            <div className='column'>
            <div className='img' >
                    <img src={item.imageUrl} height='90%' width='60%' style={{padding:'10px'}} />
                </div>
            </div>
            <div className='column'>
                <div className='desp'>
                    <h3 className='name'>{item.name}</h3>
                    <div className='description'>{item.description}</div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button className="button">Explore {item.key}</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
render(){
    return(
    <ul>
      {CategoriesData.map(item => (
        <ul key={item.id}>
            {(item.order)%2 == 1? this.imgFirst(item) : this.despFirst(item)}
        </ul>
      ))}
    </ul>
  )}
}
