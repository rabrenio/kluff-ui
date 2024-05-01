import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import TextArea, {
  type TextAreaProps,
} from '../../components/ObjectFields/TextArea'

function TextAreaContainer(props: TextAreaProps) {
  const [value, setValue] = useState('')
  return (
    <TextArea
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<TextAreaProps> = {
  title: 'ObjectFields/TextArea',
  tags: ['autodocs'],
  component: (props: TextAreaProps) => <TextAreaContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Type something',
    required: true,
    error: false,
    rows: 5,
    helperText: 'Come one type something!',
  },
}
