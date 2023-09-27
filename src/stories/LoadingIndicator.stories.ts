import type { StoryObj, Meta } from '@storybook/react'
import LoadingIndicator, {
  type LoadingIndicatorProps,
} from '../components/LoadingIndicator'

const meta: Meta<LoadingIndicatorProps> = {
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
