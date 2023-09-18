import { type ReactNode, useState, memo } from 'react'
import { LoadingButton } from '@mui/lab'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  type DialogProps,
  DialogTitle,
} from '@mui/material'

export type AlertDialogProps = {
  /**
   * message of the dialog
   * */
  body: ReactNode
  // text to use for cancel button
  cancelText?: string
  // text to use for confirm button
  confirmText?: string
  // function to be called on confirm
  onConfirm: () => void
  // function to be called on close
  onClose: () => void
} & DialogProps

function AlertDialog({
  open,
  body,
  title = 'Confirm',
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  onClose,
  onConfirm,
}: AlertDialogProps) {
  const [isLoading, setLoading] = useState(false)
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          color="inherit"
          disabled={isLoading}
          onClick={onClose}
        >
          {cancelText}
        </Button>
        <LoadingButton
          variant="text"
          color="inherit"
          loading={isLoading}
          onClick={async () => {
            try {
              setLoading(true)
              await onConfirm()
              onClose()
            } finally {
              setLoading(false)
            }
          }}
        >
          {confirmText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default memo(AlertDialog)
