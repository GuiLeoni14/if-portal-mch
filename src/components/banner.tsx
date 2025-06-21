interface BannerProps {
  image: string
}
export function Banner({ image }: BannerProps) {
  return (
    <div className="h-[195px] rounded-lg">
      <img
        src={image}
        className="object-cover w-full h-full rounded-lg"
        loading="lazy"
        alt="Carousel Image"
      />
    </div>
  )
}
