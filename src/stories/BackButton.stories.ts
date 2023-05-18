import type { StoryObj, Meta } from '@storybook/react'
import { BackButton } from '../components'

const meta: Meta<typeof BackButton> = {
  title: 'Basic/BackButton',
  tags: ['autodocs'],
  component: BackButton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
