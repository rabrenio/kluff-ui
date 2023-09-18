import {
  CircularProgress,
  IconButton,
  type IconButtonProps,
} from '@mui/material'
import AlertDialog, { type AlertDialogProps } from './AlertDialog'
import { useToggle } from '..'

type Props = Omit<IconButtonProps, 'onClick'> & {
  loading?: boolean
  alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>
}

export default function ButtonWithConfirm({
  loading,
  children,
  alertDialogProps,
  ...props
}: Props) {
  const toggle = useToggle()
  return (
    <>
      <IconButton {...props} onClick={toggle.toggle}>
        {loading ? <CircularProgress size={16} /> : children}
      </IconButton>
      <AlertDialog
        {...alertDialogProps}
        open={toggle.isOpen}
        onClose={toggle.toggle}
      />
    </>
  )
}
