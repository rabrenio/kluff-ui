import type { StoryObj, Meta } from '@storybook/react'
import ButtonWithConfirm, {
  type ButtonWithConfirmProps,
} from '../components/ButtonWithConfirm'

const meta: Meta<ButtonWithConfirmProps> = {
  title: 'Basic/ButtonWithConfirm',
  tags: ['autodocs'],
  component: ButtonWithConfirm,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello there!',
    onConfirm: () => alert('confirmed'),
    alertDialogProps: {
      body: 'Are you sure you want to remove this item?',
    },
  },
}
