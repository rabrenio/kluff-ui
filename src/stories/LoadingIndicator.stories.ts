import type { StoryObj, Meta } from '@storybook/react'
import { LoadingIndicator } from '../components'

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Basic/LoadingIndicator',
  tags: ['autodocs'],
  component: LoadingIndicator,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
  },
}
