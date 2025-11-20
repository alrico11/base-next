import { useDialog } from "@/hooks/use-dialog"
import { DynamicDialog } from "./dynamic-dialog"

export const AppDialog = () => {
  const { dialog, hideDialog, dialogProps } = useDialog()
  return (
    <DynamicDialog
      open={dialog.open}
      onOpenChange={hideDialog}
      {...dialog.props}
    >
      {dialog.node}
    </DynamicDialog>
  )
}
