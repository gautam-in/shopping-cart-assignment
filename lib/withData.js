import React from 'react'
import jsHttpCookie from 'cookie';

import {FetchUser,FetchCategory,FetchProducts,FetchSlider} from '../api/FetchCategory'

function withData(WrappedComponent, dataFor){
    
    return class extends React.Component{
        
        static async getInitialProps(ctx) {
            const cookies = ctx.req ? { cookie: ctx.req.headers.cookie } : false;
            const cookiesJSON =  cookies ?  jsHttpCookie.parse(cookies?.cookie) : {};
            const data = {}
            const user = await FetchUser()
            data.user = user.user
            // data.user =  (cookies !== false) ? JSON.parse(cookiesJSON?.user) : user.user
            data.cartData = user.user.cart

            switch(dataFor){
                case "products":
                    let category = false
                    if(ctx.query && ctx.query.category){
                        category = ctx.query.category 
                    }
                    console.log('query is',category)
                    data.products = await FetchProducts(false,category)
                    data.menu = await FetchCategory()
                break;

                case "categories":
                    const categories = await FetchCategory()
                    const slider = await FetchSlider()
                    data.categories = categories
                    data.slider = slider
                break;

                default :
                break;
            }

            return data
        }

        render() {
            return <WrappedComponent  {...this.props} />
        }
    }
}

export default withData