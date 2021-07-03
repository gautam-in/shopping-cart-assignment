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
                    data.products = await FetchProducts()
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