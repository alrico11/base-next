"use client"
import { useCarousel } from "@/hooks";
import { cn } from "@/lib";
import { Divider } from "../icons";
import RoomCard from "./room-card";
export const BestLuxurySection = () => {
  const rooms = [
    {
      images: [
        "https://picsum.photos/seed/room1/800/600",
        "https://picsum.photos/seed/room1b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
    {
      images: [
        "https://picsum.photos/seed/room2/800/600",
        "https://picsum.photos/seed/room2b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
    {
      images: [
        "https://picsum.photos/seed/room3/800/600",
        "https://picsum.photos/seed/room3b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
    {
      images: [
        "https://picsum.photos/seed/room1/800/600",
        "https://picsum.photos/seed/room1b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
    {
      images: [
        "https://picsum.photos/seed/room2/800/600",
        "https://picsum.photos/seed/room2b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
    {
      images: [
        "https://picsum.photos/seed/room3/800/600",
        "https://picsum.photos/seed/room3b/800/600",
      ],
      name: "Premium Room",
      type: "Letz inn Sinabung",
      address: "Jl. Sinabung V No.49, Wonotingal, Kec. Candisari",
      facilities: ["Shower", "Air Conditioner", "Parking", "Wifi"],
      available: 12,
      price: "Rp250rb - Rp1.5jt",
    },
  ];

  const { emblaRef, pages, current, emblaApi } = useCarousel({ loop: true, autoplayDelay: 3500 })

  return (
    <section className="w-full flex py-16 flex-col items-center text-center  px-4 ">
      <div className="flex w-full h-full flex-col sm:gap-2 gap-1 justify-center items-center">
        <Divider className="max-w-90" />
        <h2 className="text-4xl font-semibold text-[#8A6A47]">The Best Luxury Room</h2>
        <p className="text-gray-500 mt-2">Most booked and loved by our guests.</p>
      </div>
      <div className="mt-10 flex w-full">
        <div className="overflow-hidden w-full pb-4" ref={emblaRef}>
          <div className="flex w-full gap-2 ">
            {rooms.map((room, key) => (
              <div key={key} className="sm:basis-1/3  flex-shrink-0">
                <RoomCard data={room} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full justify-center ">
        {pages.map((p, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(p)}
            className={cn(
              "lg:w-3 flex lg:h-3 h-2 w-2 rounded-full transition-all duration-300 bg-grey-3",
              i === current && "lg:w-10 bg-sub-brown"
            )}
          />
        ))}
      </div>
    </section>
  )
};