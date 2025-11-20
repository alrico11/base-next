import { TElement } from "@/@types"
import { BannerCarousel } from "./banner-carousel"
import { cn } from "@/lib"

export const HomepageBannerSection = ({ className }: TElement) => {
  const data = [
    {
      index: 1,
      url: "https://picsum.photos/id/1015/800/400",
      bgImage: "https://picsum.photos/id/1015/1600/800",
      title: "Beautiful Mountain",
      description: "Pemandangan gunung yang indah dengan langit cerah."
    },
    {
      index: 2,
      url: "https://picsum.photos/id/1024/800/400",
      bgImage: "https://picsum.photos/id/1024/1600/800",
      title: "Majestic Eagle",
      description: "Elang terbang tinggi di atas pegunungan."
    },
    {
      index: 3,
      url: "https://picsum.photos/id/1035/800/400",
      bgImage: "https://picsum.photos/id/1035/1600/800",
      title: "Forest Path",
      description: "Jalan setapak di tengah hutan hijau yang menenangkan."
    },
    {
      index: 2,
      url: "https://picsum.photos/id/1024/800/400",
      bgImage: "https://picsum.photos/id/1024/1600/800",
      title: "Majestic Eagle",
      description: "Elang terbang tinggi di atas pegunungan."
    },
    {
      index: 3,
      url: "https://picsum.photos/id/1035/800/400",
      bgImage: "https://picsum.photos/id/1035/1600/800",
      title: "Forest Path",
      description: "Jalan setapak di tengah hutan hijau yang menenangkan."
    },
    {
      index: 2,
      url: "https://picsum.photos/id/1024/800/400",
      bgImage: "https://picsum.photos/id/1024/1600/800",
      title: "Majestic Eagle",
      description: "Elang terbang tinggi di atas pegunungan."
    },
    {
      index: 3,
      url: "https://picsum.photos/id/1035/800/400",
      bgImage: "https://picsum.photos/id/1035/1600/800",
      title: "Forest Path",
      description: "Jalan setapak di tengah hutan hijau yang menenangkan."
    }
  ]

  return (
    <section className={cn(className)}>
      <BannerCarousel data={data} />
    </section>
  )
}