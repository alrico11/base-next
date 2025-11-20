import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

type UseCarouselParams = Partial<EmblaOptionsType> & {
  autoplayDelay?: number
}

export function useCarousel({
  loop = true,
  autoplayDelay = 3000,
  axis = "x",
  ...rest
}: UseCarouselParams = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    axis,
    align: "center",
    ...rest,
  })

  const [current, setCurrent] = useState(0)
  const [pages, setPages] = useState<number[]>([])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCurrent(api.selectedScrollSnap())
  }, [])

  // handle snap pages
  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    setPages(emblaApi.scrollSnapList().map((_, i) => i))
    emblaApi.on("select", () => onSelect(emblaApi))
  }, [emblaApi, onSelect])

  // autoplay
  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      if (axis === "y") {
        emblaApi.scrollPrev()
      } else {
        emblaApi.scrollNext()
      }
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [emblaApi, autoplayDelay, axis])

  return {
    emblaRef,
    emblaApi,
    current,
    pages,
  }
}
