import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import Checkbox, {
  type CheckboxProps,
} from '../../components/ObjectFields/Checkbox'

function CheckboxContainer(props: CheckboxProps) {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      {...props}
      value={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  )
}

const meta: Meta<CheckboxProps> = {
  title: 'ObjectFields/Check',
  tags: ['autodocs'],
  component: (props: CheckboxProps) => <CheckboxContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Are you awake?',
    required: true,
    error: true,
    helperText: 'You need to say yes',
  },
}
