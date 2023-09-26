import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import DateTimePicker, {
  type DateTimePickerProps,
} from '../../components/ObjectFields/DateTimePicker'

function DateTimePickerContainer(props: DateTimePickerProps) {
  const [value, setValue] = useState<DateTimePickerProps['value'] | null>(null)
  return (
    <DateTimePicker
      {...props}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  )
}

const meta: Meta<DateTimePickerProps> = {
  title: 'ObjectFields/DateTimePicker',
  tags: ['autodocs'],
  component: (props: DateTimePickerProps) => (
    <DateTimePickerContainer {...props} />
  ),
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'What is the date and time?',
    required: true,
    error: false,
  },
}
