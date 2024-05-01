import type { StoryObj, Meta } from '@storybook/react'
import ButtonGroup, { ButtonGroupProps } from '../components/ButtonGroup.tsx'
import Button from '../components/Button.tsx'

const meta: Meta<ButtonGroupProps> = {
  title: 'Basic/ButtonGroup',
  tags: ['autodocs'],
  component: ButtonGroup,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: [
      <Button key="button1">button 1</Button>,
      <Button key="button2">button 2</Button>
    ],
  },
}
