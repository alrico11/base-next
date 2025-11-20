import { TElement } from "@/@types"
import { cn } from "@/lib"

export const Divider = ({ className }: TElement) => {
  return (
    <div className={cn(className)}>
      <svg className="w-full" width="360" height="25" viewBox="0 0 360 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="180" width="17" height="17" transform="rotate(45 180 0)" fill="#8A7460" />
        <path d="M0 11.9795C6 12.0128 12 12.0445 18 12.0745C72 12.3445 126 12.4795 180 12.4795C234 12.4795 288 12.3445 342 12.0745C348 12.0445 354 12.0128 360 11.9795C354 11.9462 348 11.9145 342 11.8845C288 11.6145 234 11.4795 180 11.4795C126 11.4795 72 11.6145 18 11.8845C12 11.9145 6 11.9462 0 11.9795Z" fill="#8A7460" />
      </svg>
    </div>
  )
}