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
                    <div className='image'> <NextImage src={imageUrl} alt={name} width={500} height={252} /></div>
                    <div className={'right-view'}>
                        <h3 className='text-center'>{name}</h3>
                        <p className='text-center'>{description}</p>
                        <div className='text-center'>
                            <PrimaryButton onClick={() => onRedirectProduct(key)}>{` Explore ${key}`}</PrimaryButton>
                        </div>
                    </div>
                </section>
            )
        })
    )
}
