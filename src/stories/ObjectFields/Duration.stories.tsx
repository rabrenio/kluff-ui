import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import Duration, {
  type DurationProps,
} from '../../components/ObjectFields/Duration'

function DurationContainer(props: DurationProps) {
  const [value, setValue] = useState('')
  return (
    <Duration
      {...props}
      value={value}
      onChange={nextValue => setValue(nextValue)}
    />
  )
}

const meta: Meta<DurationProps> = {
  title: 'ObjectFields/Duration',
  tags: ['autodocs'],
  component: (props: DurationProps) => <DurationContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter duration',
    required: true,
    error: false,
    helperText: 'Come one enter something!',
  },
}
