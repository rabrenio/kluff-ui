import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import FloatNumberPicker, {
  type FloatNumberPickerProps,
} from '../../components/ObjectFields/FloatNumberPicker'

function FloatNumberPickerContainer(props: FloatNumberPickerProps) {
  const [value, setValue] = useState('')
  return (
    <FloatNumberPicker
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<FloatNumberPickerProps> = {
  title: 'ObjectFields/FloatNumberPicker',
  tags: ['autodocs'],
  component: (props: FloatNumberPickerProps) => (
    <FloatNumberPickerContainer {...props} />
  ),
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter number',
    required: true,
    error: false,
    helperText: 'Come enter a number!',
    precision: 1,
    inputProps: {
      min: 0,
      max: 5,
    },
  },
}
