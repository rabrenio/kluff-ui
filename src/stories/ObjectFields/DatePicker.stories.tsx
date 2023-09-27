import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import DatePicker, {
  type DatePickerProps,
} from '../../components/ObjectFields/DatePicker'

function TextContainer(props: DatePickerProps) {
  const [value, setValue] = useState<DatePickerProps['value'] | null>(null)
  return (
    <DatePicker
      {...props}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  )
}

const meta: Meta<DatePickerProps> = {
  title: 'ObjectFields/DatePicker',
  tags: ['autodocs'],
  component: (props: DatePickerProps) => <TextContainer {...props} />,
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
