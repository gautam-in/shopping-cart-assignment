import React from 'react'
import ProductList from './ProductList'
import MuiAccordion from '../../../components/MuiComponents/MuiAccordion'
import { useCategories } from '../../../hooks/queries'

export default function MobileView() {
    const { data: categories } = useCategories()
    
    return (
        <div className="block sm:hidden">
            {
                categories?.map(item => {
                    return (
                        <MuiAccordion
                            key={item?.id}
                            title={item?.name}
                            content={<ProductList filterByCategoryId={item?.id} />}
                        />
                    )
                })
            }
        </div>
    )
}
