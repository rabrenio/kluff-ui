import { type ReactNode, memo } from 'react'
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
  loading?: boolean
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
  loading,
  open,
  body,
  title = 'Confirm',
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  onClose,
  onConfirm,
}: AlertDialogProps) {
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
          disabled={loading}
          onClick={onClose}
        >
          {cancelText}
        </Button>
        <LoadingButton
          variant="text"
          color="inherit"
          loading={loading}
          onClick={async () => {
            await onConfirm()
            onClose()
          }}
        >
          {confirmText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default memo(AlertDialog)
