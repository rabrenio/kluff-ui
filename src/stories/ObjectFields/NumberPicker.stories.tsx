import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import NumberPicker, {
  type NumberPickerProps,
} from '../../components/ObjectFields/NumberPicker'

function NumberPickerContainer(props: NumberPickerProps) {
  const [value, setValue] = useState('')
  return (
    <NumberPicker
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<NumberPickerProps> = {
  title: 'ObjectFields/NumberPicker',
  tags: ['autodocs'],
  component: (props: NumberPickerProps) => <NumberPickerContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter number',
    required: true,
    error: false,
    helperText: 'Come enter a number!',
  },
}
