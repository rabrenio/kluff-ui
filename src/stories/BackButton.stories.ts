import type { StoryObj, Meta } from '@storybook/react'
import BackButton, { type BackButtonProps } from '../components/BackButton'

const meta: Meta<BackButtonProps> = {
  title: 'Basic/BackButton',
  tags: ['autodocs'],
  component: BackButton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
