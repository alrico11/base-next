import { cn } from "@/lib";
import { Bookmark, Calendar } from "lucide-react";

interface TravelInsightCardProps {
  data: {
    title: string;
    image: string;
    date: string;
    tag?: string;
  };
  className?: string;
}

export const TravelInsightCard = ({ data, className }: TravelInsightCardProps) => {
  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-sm", className)}>
      <img
        src={data.image}
        className="w-full h-full object-cover"
        alt={data.title}
      />

      {/* Gradient Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Tag */}
      {data.tag && (
        <span className="absolute top-3 left-3 bg-white/80 text-black text-[10px] px-2 py-1 rounded">
          {data.tag}
        </span>
      )}

      {/* Bookmark */}
      <Bookmark className="absolute top-3 right-3 text-white w-5 h-5" />

      {/* Bottom Info */}
      <div className="absolute bottom-3 left-3 text-white">
        <p className="font-medium text-sm sm:text-base">{data.title}</p>

        <div className="flex items-center gap-1 text-xs mt-1">
          <Calendar className="w-3 h-3" />
          {data.date}
        </div>
      </div>
    </div>
  );
};
