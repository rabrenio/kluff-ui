import { Button } from '@mui/material'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Basic/Button',
  tags: ['autodocs'],
  component: Button,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hello there!',
  },
}

export const Styled: Story = {
  args: {
    color: 'success',
    variant: 'outlined',
    children: 'Hello there!',
  },
}
