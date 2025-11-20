import { TElement } from "@/@types"
import { cn } from "@/lib"
import { LogoHorizontal } from "../icons/logo-horizontal"

export const FindProperties = ({ className }: TElement) => {
  return (
    <div className={cn("w-full h-full flex flex-col sm:gap-12 gap-10 items-center", className)}>
      <LogoHorizontal className="w-22 h-28" />
      <div className="flex flex-1 w-full h-full bg-red-500 border border-white  rounded-sm">

      </div>
    </div>
  )
}