import { type ComponentProps } from 'react'
import {
  CircularProgress,
  type CircularProgressProps,
  IconButton,
  type IconButtonProps,
} from '@mui/material'
import { type SvgIconComponent } from '@mui/icons-material'
import AlertDialog, { type AlertDialogProps } from './AlertDialog'
import { useToggle } from '..'

const DEFAULT_CIRCULAR_PROGRESS_PROPS = {
  size: 16,
  className: '',
}

type Props = Omit<IconButtonProps, 'onClick' | 'children'> & {
  loading?: boolean
  icon: SvgIconComponent
  iconProps: ComponentProps<SvgIconComponent>
  alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>
  circularProgressProps: CircularProgressProps
}

export default function IconButtonWithConfirm({
  loading,
  className = '',
  icon,
  iconProps = {},
  alertDialogProps,
  circularProgressProps = DEFAULT_CIRCULAR_PROGRESS_PROPS,
  ...props
}: Props) {
  const toggle = useToggle()
  const Icon = icon
  return (
    <>
      <IconButton
        {...props}
        className={`${className} relative`}
        onClick={toggle.toggle}
      >
        {loading && (
          <CircularProgress
            {...circularProgressProps}
            className={`${circularProgressProps.className} absolute`}
          />
        )}
        <Icon
          {...iconProps}
          className={`${loading ? 'invisible' : ''} ${
            iconProps.className ?? ''
          }`}
        />
      </IconButton>
      <AlertDialog
        {...alertDialogProps}
        open={toggle.isOpen}
        onClose={toggle.toggle}
      />
    </>
  )
}
