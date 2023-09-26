import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import TimePicker, {
  type TimePickerProps,
} from '../../components/ObjectFields/TimePicker'

function TimePickerContainer(props: TimePickerProps) {
  const [value, setValue] = useState<TimePickerProps['value'] | null>(null)
  return (
    <TimePicker
      {...props}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  )
}

const meta: Meta<TimePickerProps> = {
  title: 'ObjectFields/TimePicker',
  tags: ['autodocs'],
  component: (props: TimePickerProps) => <TimePickerContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'What is the date?',
    required: true,
    error: false,
  },
}
