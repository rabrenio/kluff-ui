import { ButtonWithConfirm } from '../components'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ButtonWithConfirm> = {
  title: 'Basic/ButtonWithConfirm',
  tags: ['autodocs'],
  component: ButtonWithConfirm,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello there!',
    alertDialogProps: {
      body: 'Are you sure you want to remove this item?',
      onConfirm: () => alert('confirmed'),
    },
  },
}
