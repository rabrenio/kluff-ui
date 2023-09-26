import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import PhoneNumber, {
  type PhoneNumberProps,
} from '../../components/ObjectFields/PhoneNumber'

function PhoneNumberContainer(props: PhoneNumberProps) {
  const [value, setValue] = useState('')
  return (
    <PhoneNumber
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<PhoneNumberProps> = {
  title: 'ObjectFields/PhoneNumber',
  tags: ['autodocs'],
  component: (props: PhoneNumberProps) => <PhoneNumberContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter phone number',
    required: true,
    error: false,
    helperText: 'Come one type something!',
  },
}
