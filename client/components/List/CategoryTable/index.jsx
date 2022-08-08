import React from 'react'
import NextImage from 'next/image'
import { PrimaryButton } from '../../Button'
import { useRouter } from 'next/router'

export default function CategoryTable({ categories = [] }) {
    const router = useRouter()

    const onRedirectProduct = (key) => {
        router.push(`/products/?category=${key}`)
    }

    return (
        categories?.map(({ name, description, key, imageUrl }, idx) => {
            return (
                <section key={`cat_${idx}`} className={'category-cell'}>
                    <img src={"/Users/prajain23/Documents/CaseStudy-XT/shopping-cart-assignment/static/images/logo.png"}></img>
                    {/* <NextImage src={"/Users/prajain23/Documents/CaseStudy-XT/shopping-cart-assignment/static/images/logo.png"} height={200} width={300} /> */}
                    <div className={'right-view'}>
                        <h3 className='text-center'>{name}</h3>
                        <p className='text-center'>{description}</p>
                        <div className='text-center'>
                            <PrimaryButton title={` Explore ${key}`} onClick={() => onRedirectProduct(key)} />
                        </div>
                    </div>
                </section>
            )
        })
    )
}
