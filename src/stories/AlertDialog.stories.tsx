import { Button } from '@mui/material'
import type { StoryObj, Meta } from '@storybook/react'
import AlertDialog, { type AlertDialogProps } from '../components/AlertDialog'
import useToggle from '../utils/useToggle'

function AlertDialogContainer(props: AlertDialogProps) {
  const { isOpen, setOpen } = useToggle()
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me to open</Button>
      <AlertDialog
        {...props}
        open={isOpen}
        onClose={handleClose}
        onConfirm={handleClose}
      />
    </div>
  )
}

const meta: Meta<AlertDialogProps> = {
  title: 'Basic/AlertDialog',
  tags: ['autodocs'],
  component: (props: AlertDialogProps) => <AlertDialogContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Confirm',
    body: 'Are you sure you want to go?',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  },
}
