"use client";

import { TElement } from "@/@types";
import { useCarousel } from "@/hooks";
import { cn } from "@/lib";
import { Divider } from "../icons";
import { TravelInsightCard } from "./travel-insight-card";

export const TravelInsightSection = ({ className }: TElement) => {
  const insights = [
    {
      id: 1,
      title: "Global property rights and land use efficiency",
      image: "https://picsum.photos/seed/insight1/1100/700",
      date: "23 Sept 2025",
    },
    {
      id: 2,
      title: "Staycation Nyaman di Tengah Kota: Rekomendasi Terbaik",
      image: "https://picsum.photos/seed/insight2/1100/700",
      date: "23 Sept 2025",
    },
    {
      id: 3,
      title: "Staycation dengan pemandangan alam terbaik",
      image: "https://picsum.photos/seed/insight3/1100/700",
      date: "23 Sept 2025",
      tag: "Education",
    },
    {
      id: 4,
      title: "10 Rekomendasi Staycation Menarik",
      image: "https://picsum.photos/seed/insight4/1100/700",
      date: "23 Sept 2025",
    },
    {
      id: 5,
      title: "Liburan Nyaman & Hemat",
      image: "https://picsum.photos/seed/insight5/1100/700",
      date: "23 Sept 2025",
      tag: "Tips",
    },
  ];
  // BIG CAROUSEL
  const {
    emblaRef: bigRef,
    emblaApi: bigApi,
    pages: bigPages,
    current: bigCurrent
  } = useCarousel({ loop: true, autoplayDelay: 3500 });

  // SMALL VERTICAL CAROUSEL
  const {
    emblaRef: smallRef,
    emblaApi: smallApi
  } = useCarousel({ loop: true, autoplayDelay: 3500, axis: "y" });

  return (
    <section className={cn("w-full flex flex-1", className)}>
      <div className="w-full h-full flex flex-col lg:flex-row gap-10">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center w-full max-w-114 gap-2">
          <Divider className={"max-w-90"} />
          <h3 className="text-[#8A6A47] text-sm tracking-wide">TRAVEL INSIGHT</h3>
          <h2 className="text-4xl font-semibold ">Get inspired</h2>
          <p className="text-gray-500 ">
            Get inspired with travel ideas, reviews, and local guides.
          </p>
          <button className="flex items-center gap-2 text-[#8A6A47] font-medium">
            Explore →
          </button>
        </div>

        {/* CAROUSELS */}
        <div className="w-full h-full flex flex-row gap-6 flex-1 max-w-162">

          {/* HORIZONTAL BIG CAROUSEL */}
          <div className="w-full max-w-90">
            <div className="overflow-hidden rounded-xl" ref={bigRef}>
              <div className="flex">
                {insights.map((item, idx) => (
                  <div key={idx} className="basis-full shrink-0">
                    <TravelInsightCard data={item} className="h-[380px]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {bigPages.map((p, i) => (
                <button
                  key={i}
                  onClick={() => bigApi?.scrollTo(p)}
                  className={cn(
                    "w-3 h-1.5 rounded-full bg-gray-300 transition-all",
                    bigCurrent === i ? "w-6 bg-[#8A6A47]" : "w-3"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-66 h-[380px] overflow-hidden">
            <div className="h-full" ref={smallRef}>
              <div className="flex flex-col">
                {insights.map((item, idx) => (
                  <div key={idx} className="shrink-0 h-[120px] mb-3">
                    <TravelInsightCard data={item} className="h-[120px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
