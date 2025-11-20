"use client"
import { TElement } from "@/@types"
import { cn } from "@/lib"
import { Label } from "../ui/label"
import { useCarousel } from "@/hooks"

export interface BannerCarouselProps extends TElement {
  data: {
    index: number
    url: string
    bgImage: string
    title: string
    description: string
  }[]
  items?: number
  autoplayDelay?: number
}

export const BannerCarousel = ({ className, items = 8, autoplayDelay = 3000, data, ...rest }: BannerCarouselProps) => {
  const { emblaRef, emblaApi, current, pages } = useCarousel({ loop: true, autoplayDelay })
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center w-full lg:gap-10 md:gap-8 sm:gap-6 gap-4 h-full",
        className
      )}
      {...rest}
    >
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {data.map((d, i) => (
            <BannerCard data={d} key={i} />
          ))}
        </div>
      </div>


      <div className="flex gap-2">
        {pages.map((p, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(p)}
            className={cn(
              "lg:w-3 lg:h-3 h-2 w-2 rounded-full transition-all duration-300 bg-grey-3",
              i === current && "lg:w-10 bg-sub-brown"
            )}
          />
        ))}
      </div>
    </div>
  )
}

interface BannerCardProps extends TElement {
  data: {
    index: number
    url: string
    bgImage: string
    title: string
    description: string
  }
}

const BannerCard = ({ data: { bgImage, description, title }, className, ...rest }: BannerCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-center bg-cover shrink-0 ",
        "rounded-[16px] mx-2 w-full max-w-76 aspect-video max-h-32.5",
        "lg:mx-4 lg:max-w-138 lg:rounded-xl lg:max-h-60",
        className,
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
      {...rest}
    >
      <div className="absolute lg:bottom-6 lg:left-6 bottom-3 left-3 flex flex-col gap-2">
        <Label mobile="Body3" variant="H3" className="font-semibold text-card">{title}</Label>
        <Label mobile="Body3" variant="H6" className="text-card text-[8px]">{description}</Label>
      </div>
    </div>
  )
}