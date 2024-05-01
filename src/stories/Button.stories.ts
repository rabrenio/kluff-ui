import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@mui/material'
import { ButtonProps } from '../components/Button.tsx'

const meta: Meta<ButtonProps> = {
  title: 'Basic/Button',
  tags: ['autodocs'],
  component: Button,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello there!',
    variant: "text"
  },
}

export const Styled: Story = {
  args: {
    color: 'success',
    variant: 'outlined',
    children: 'Hello there!',
  },
}
