import { Delete } from '@mui/icons-material'
import type { StoryObj, Meta } from '@storybook/react'
import IconButtonWithConfirm, {
  type IconButtonWithConfirmProps,
} from '../components/IconButtonWithConfirm'

const meta: Meta<IconButtonWithConfirmProps> = {
  title: 'Basic/IconButtonWithConfirm',
  tags: ['autodocs'],
  component: IconButtonWithConfirm,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: Delete,
    onConfirm: () => alert('confirmed'),
    alertDialogProps: {
      body: 'Are you sure you want to remove this item?',
    },
  },
}
