import { LoadingButton, type LoadingButtonProps } from '@mui/lab'
import AlertDialog, { type AlertDialogProps } from './AlertDialog'
import { useToggle } from '..'

type Props = Omit<LoadingButtonProps, 'onClick'> & {
  alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>
}

export default function ButtonWithConfirm({
  children,
  alertDialogProps,
  ...props
}: Props) {
  const toggle = useToggle()
  return (
    <>
      <LoadingButton {...props} onClick={toggle.toggle}>
        {children}
      </LoadingButton>
      <AlertDialog
        {...alertDialogProps}
        open={toggle.isOpen}
        onClose={toggle.toggle}
      />
    </>
  )
}
