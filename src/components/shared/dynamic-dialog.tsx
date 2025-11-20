"use client"

import { TElement } from "@/@types"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { cn } from "@/lib"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { XIcon } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

export interface DynamicDialogProps extends TElement {
  header?: React.ReactNode
  footer?: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const DynamicDialog = (props: DynamicDialogProps) => {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  if (isDesktop) {
    return <DialogDesktop {...props} />
  }
  return <DrawerMobile {...props} />
}

function DialogDesktop({ header, footer, children, className, open, onOpenChange }: DynamicDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "w-full h-auto gap-4 px-0 py-4 border-none sm:max-w-2xl sm:max-h-[80vh] rounded-[12px]",
          className
        )}
      >

        <VisuallyHidden asChild>
          <DialogDescription />
        </VisuallyHidden>
        <DialogTitle className="px-4 mr-10" hidden={!header}>
          {header}
        </DialogTitle>
        <div className="flex sm:max-h-[90vh] w-full h-full">
          {children}
        </div>
        {footer && <div className="flex flex-1 flex-col gap-6 px-4">{footer}</div>}
      </DialogContent>
    </Dialog>
  )
}

function DrawerMobile({ header, footer, children, open, onOpenChange, className }: DynamicDialogProps) {
  const handleOpenChange = (next: boolean) => {
    if (!next && open) {
      return
    }
    onOpenChange(next)
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange} modal>
      <DrawerContent
        className={cn("sm:hidden p-0 rounded-t-[12px] w-full h-auto", className)}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative flex h-full w-full flex-col">
          <DrawerClose
            className="justify-end cursor-pointer absolute top-5 right-4"
            asChild
            onClick={() => onOpenChange(false)}
          >
            <XIcon />
          </DrawerClose>

          <DrawerTitle hidden />
          <VisuallyHidden asChild>
            <DrawerTitle />
          </VisuallyHidden>

          {/* Header */}
          <div className="flex flex-col pt-4 px-4 mb-2 mr-10 shrink-0">
            {header}
          </div>

          {/* Body (scrollable) */}
          <div className="overflow-y-auto">
            {children}
          </div>

          {/* Footer */}
          <div className="grid mb-4 mx-4 pt-4">
            {footer}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
