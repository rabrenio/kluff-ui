import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import LongText, {
  type LongTextProps,
} from '../../components/ObjectFields/LongText'

function LongTextContainer(props: LongTextProps) {
  const [value, setValue] = useState('')
  return (
    <LongText
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<LongTextProps> = {
  title: 'ObjectFields/LongText',
  tags: ['autodocs'],
  component: (props: LongTextProps) => <LongTextContainer {...props} />,
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
