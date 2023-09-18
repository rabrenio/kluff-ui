import { Delete } from '@mui/icons-material'
import { IconButtonWithConfirm } from '../components'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof IconButtonWithConfirm> = {
  title: 'Basic/IconButtonWithConfirm',
  tags: ['autodocs'],
  component: IconButtonWithConfirm,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: Delete,
    alertDialogProps: {
      body: 'Are you sure you want to remove this item?',
      onConfirm: () => alert('confirmed'),
    },
  },
}
