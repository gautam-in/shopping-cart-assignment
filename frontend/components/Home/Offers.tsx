import React from 'react'
import Carousel, {CarouselItem} from './Carousel'
import {useQuery} from 'react-query'

interface Banner {
  bannerImageUrl: string
  bannerImageAlt: string
  isActive: boolean
  order: number
  id: string
}

async function fetchOffers() {
  const response = await fetch(`http://localhost:5000/banners/`)
  return response.json()
}

function Offers() {
  const {isLoading, isError, data, error} = useQuery('banner', fetchOffers)
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Error Occured</div>
  return (
    <section aria-label="New Offer" className="overflow-hidden">
      <Carousel>
        {data.map(
          (offer: {
            id: React.Key
            bannerImageUrl: string
            bannerImageAlt: string
          }) => (
            <CarouselItem key={offer.id}>
              <img
                src={offer.bannerImageUrl}
                alt={offer.bannerImageAlt}
                className="object-fill w-full"
              />
            </CarouselItem>
          ),
        )}
      </Carousel>
    </section>
  )
}

export default Offers
