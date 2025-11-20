import { TElement } from "@/@types";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib";
import { Car, MapPin, ShowerHead, Snowflake, Wifi } from "lucide-react";
import React from "react";

interface RoomCardProps extends TElement {
  data: {
    images: string[];
    name: string;
    type: string;
    address: string;
    facilities: string[];
    available: number;
    price: string;
  };
}

export default function RoomCard({ data, className }: RoomCardProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Shower: <ShowerHead className="w-4 h-4" />,
    "Air Conditioner": <Snowflake className="w-4 h-4" />,
    Parking: <Car className="w-4 h-4" />,
    Wifi: <Wifi className="w-4 h-4" />,
  };

  return (
    <div className={cn(
      "relative bg-center bg-cover shadow-card overflow-hidden flex flex-col w-full h-full",
      "rounded-lg max-w-62.5 mr-2",
      "sm:max-w-90 sm:rounded-xl",
      className)}>
      <div className="relative w-full h-full flex flex-1">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {data.images.map((img, i) => (
              <CarouselItem key={i}>
                <img
                  src={img}
                  alt={data.name}
                  className="h-60 w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="absolute bottom-0 right-0 bg-primary text-white text-sm px-4 py-1 rounded-tl-lg shadow-md">
          {data.price}/night
        </div>
      </div>
      <div className="p-4 flex w-full flex-col flex-1 text-start">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">{data.type}</p>
          <h2 className="text-xl font-semibold mt-1">{data.name}</h2>
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{data.address}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {data.facilities.map((f) => (
            <div
              key={f}
              className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-xl"
            >
              {iconMap[f]}
              {f}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          {data.available} Rooms Available
        </p>
      </div>
    </div>
  );
}
