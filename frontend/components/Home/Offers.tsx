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
  if (isLoading)
    return (
      <div className="mt-16">
        <div className="flex justify-between items-center animate-pulse space-x-8 md:mx-0 mx-4 mb-8 mt-8">
          <div className="h-48 w-full bg-slate-200"></div>
        </div>
      </div>
    )
  if (isError) return <div>Error Occured</div>
  return (
    <section
      aria-label="New Offer"
      className="overflow-hidden shadow-[0_25px_20px_-20px_rgba(174,171,171,0.45)]"
    >
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
