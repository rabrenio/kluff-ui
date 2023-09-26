import { LoadingButton, type LoadingButtonProps } from '@mui/lab'
import AlertDialog, { type AlertDialogProps } from './AlertDialog'
import { useToggle } from '..'

export type ButtonWithConfirmProps = Omit<LoadingButtonProps, 'onClick'> & {
  onConfirm: AlertDialogProps['onConfirm']
  alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose' | 'onConfirm'>
}

export default function ButtonWithConfirm({
  children,
  alertDialogProps,
  onConfirm,
  ...props
}: ButtonWithConfirmProps) {
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
        onConfirm={onConfirm}
      />
    </>
  )
}
