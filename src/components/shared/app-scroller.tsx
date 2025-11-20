"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import * as React from "react"

interface ScrollerProps {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical" | "both"
  className?: string
}

export const Scroller = ({
  children,
  orientation = "vertical",
  className
}: ScrollerProps) => {
  return (
    <ScrollArea className={cn("h-full w-full pb-4", className)}>
      <div
        className={cn(
          orientation === "horizontal" && "flex w-max",
          orientation === "vertical" && "flex flex-col",
          orientation === "both" && "flex flex-wrap",
          "gap-0 "
        )}
      >
        {children}
      </div>
      {(orientation === "horizontal" || orientation === "both") && (
        <ScrollBar orientation="horizontal" />
      )}
      {(orientation === "vertical" || orientation === "both") && (
        <ScrollBar orientation="vertical" />
      )}
    </ScrollArea>
  )
}
