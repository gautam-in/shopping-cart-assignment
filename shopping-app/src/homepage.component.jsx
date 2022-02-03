import React from 'react';
import './homepage.styles.scss';
const HomePage=()=>{
    return <div className="homepage">
        <div className='directory-menu'>

            
        <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Slider</h1>
                   
                </div>
            </div>
       
            <div className='menu-item'>
            <div className='category-image'>
            <img src='./static/images/category/fruits.png'></img>
            </div>
                
                <div className='content'>
                    <h1 className='title'>Fruits and vegitable</h1>
                    <span  className='subtitle'>Varienty of fresh fruits and vegitable</span>
                    <span className='shop-now'>shop now</span>
                </div>
            </div>

            <div className='menu-item'>
            <div className='category-image'>
            <img src='./static/images/category/bakery.png'></img>
            </div>
         
                <div className='content'>
                    <h1 className='title'>Bakery, Cakes and Diary</h1>
                    <span  className='subtitle'>best cupcakes ,cookies,cheesecake,freshbread,cofee,milk and more..</span>
                    <span className='shop-now'>shop now</span>
                    
                </div>
            </div>

            <div className='menu-item'>
                
            <div className='category-image'>
            <img src='./static/images/category/beverages.png'></img>
            </div>
                <div className='content'>
                    <h1 className='title'>Beverages</h1>
                    <span className='subtitle'>fresh fruit juices, soda,beer and more</span>
                    <span className='shop-now'>shop now</span>
                  
                </div>
            </div>

            <div className='menu-item'>
            <div className='category-image'>
            <img src='./static/images/category/beauty.png'></img>
            </div>
           
                <div className='content'>
                    <h1 className='title'>Beauty and Hygine</h1>
                    <span className='subtitle'>Beauty and personal care producst at best price</span>
                    <span className='shop-now'>shop now</span>
                  
                </div>
            </div>

            <div className='menu-item'>
            <div className='category-image'>
            <img src='./static/images/category/baby.png'></img>
            </div>
            
                <div className='content'>
                    <h1 className='title'>Baby care</h1>
                    <span className='subtitle'>Buy baby bath, skin products</span>
                    <span className='shop-now'>shop now</span>
                </div>
            </div>

        </div>
    </div>
}

export default HomePage;