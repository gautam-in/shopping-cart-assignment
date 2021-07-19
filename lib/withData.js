import React from 'react'
import {FetchUser,FetchCategory,FetchProducts} from '../api/FetchCategory'

function withData(WrappedComponent, dataFor){
    
    return class extends React.Component{
        
        static async getInitialProps(ctx) {
            console.log("context",ctx.query)

            const data = {}
            const user = await FetchUser()
            data.user = user.user

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
                    data.categories = categories
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