// @ts-nocheck

import React, {useEffect, useState} from 'react'

interface Props {
  children?: JSX.Element | JSX.Element[]
  width?: string
}

export const CarouselItem = ({children, width}: Props) => {
  return <div className="carousel-item w-full h-full">{children}</div>
}

const Carousel = ({children}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner max-w-[2400px]  max-h-[600px]"
        style={{transform: `translateX(-${activeIndex * 100}%)`}}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: '100%'})
        })}
      </div>

      <button
        onClick={() => {
          updateIndex(activeIndex - 1)
        }}
        className="absolute top-[50%] translate-y-[-50%] p-2 uppercase text-white bg-slate-800 bg-opacity-60"
      >
        Prev
      </button>

      <button
        onClick={() => {
          updateIndex(activeIndex + 1)
        }}
        className="absolute top-[50%] right-0 translate-y-[-50%] p-2 uppercase text-white bg-slate-800 bg-opacity-60"
      >
        Next
      </button>
      <div className="indicators absolute bottom-10 left-[50%]">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              aria-label={`navigate to offer ${index + 1}`}
              className={`${
                index === activeIndex ? 'bg-slate-900' : 'bg-slate-500'
              } h-2 w-2 rounded-full  mr-4 md:inline hidden`}
              onClick={() => {
                updateIndex(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
