import { DynamicDialogProps } from "@/components/shared"
import { atom } from "jotai"

export const dynamicDialogAtom = atom<{
  open: boolean
  node?: React.ReactNode
  props?: Partial<DynamicDialogProps>
}>({
  open: false,
  node: undefined,
  props: {},
})
