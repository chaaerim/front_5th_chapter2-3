import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogContent } from "./dialogContent.ui"
import { DialogHeader } from "./dialogHeader.ui"
import { DialogTitle } from "./dialogTitle.ui"

const DialogContainer = DialogPrimitive.Root

interface DialogProps extends DialogPrimitive.DialogProps {
  children: React.ReactNode
  title: string | React.ReactNode
}

export const Dialog = ({ children, title, ...props }: DialogProps) => {
  return (
    <DialogContainer {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </DialogContainer>
  )
}
