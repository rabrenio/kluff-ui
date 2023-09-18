import {
  CircularProgress,
  type CircularProgressProps,
  IconButton,
  type IconButtonProps,
} from '@mui/material'
import AlertDialog, { type AlertDialogProps } from './AlertDialog'
import { useToggle } from '..'

const DEFAULT_CIRCULAR_PROGRESS_PROPS = {
  size: 16,
}

type Props = Omit<IconButtonProps, 'onClick'> & {
  loading?: boolean
  alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>
  circularProgressProps: CircularProgressProps
}

export default function ButtonWithConfirm({
  loading,
  children,
  alertDialogProps,
  circularProgressProps = DEFAULT_CIRCULAR_PROGRESS_PROPS,
  ...props
}: Props) {
  const toggle = useToggle()
  return (
    <>
      <IconButton {...props} onClick={toggle.toggle}>
        {loading ? <CircularProgress {...circularProgressProps} /> : children}
      </IconButton>
      <AlertDialog
        {...alertDialogProps}
        open={toggle.isOpen}
        onClose={toggle.toggle}
      />
    </>
  )
}
