'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface CarouselProps {
  images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 p-2 bg-white shadow-md rounded-full cursor-pointer"
      >
        <ArrowLeft />
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 p-2 bg-white shadow-md rounded-full cursor-pointer"
      >
        <ArrowRight />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
        }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-[495px] rounded-lg">
              <img
                src={image}
                className="object-cover w-full h-full rounded-lg"
                loading="lazy"
                alt="Carousel Image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
