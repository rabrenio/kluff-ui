import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import Text, { type TextProps } from '../../components/ObjectFields/Text'

function TextContainer(props: TextProps) {
  const [value, setValue] = useState('')
  return (
    <Text {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

const meta: Meta<TextProps> = {
  title: 'ObjectFields/Text',
  tags: ['autodocs'],
  component: (props: TextProps) => <TextContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Type something',
    required: true,
    error: false,
    helperText: 'Come one type something!',
  },
}
