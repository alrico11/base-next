import { dynamicDialogAtom } from "@/atom"
import { DynamicDialogProps } from "@/components/shared"
import { useAtom } from "jotai"

export function useDialog() {
  const [state, setState] = useAtom(dynamicDialogAtom)
  return {
    dialogProps: state.props,
    dialog: state,
    showDialog: ({ children, ...rest }: Partial<DynamicDialogProps>) =>
      setState((prev) => ({ ...prev, props: rest, open: true, node: children })),
    hideDialog: () =>
      setState((prev) => ({ ...prev, open: false, node: undefined })),
  }
}
