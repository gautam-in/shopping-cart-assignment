import React from 'react'
import {FetchUser,FetchCategory,FetchProducts} from '../api/FetchCategory'
import {arrayChunk} from './lib'

function withData(WrappedComponent, dataFor){
    
    return class extends React.Component{
        
        static async getInitialProps(ctx) {
            
            const data = {}
            
            const user = await FetchUser()
            
            data.user = user

            switch(dataFor){
                
                case "products":
                    const products = await FetchProducts()
                    data.products = products
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