import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import Select, {
  type SelectProps,
  type SelectOption,
} from '../components/Select'

function SelectContainer(props: SelectProps) {
  const [value, setValue] = useState<SelectOption>(null!)
  return (
    <Select
      {...props}
      value={value}
      onChange={e => setValue(e.target.value as SelectOption)}
    />
  )
}

const meta: Meta<SelectProps> = {
  title: 'Basic/Select',
  tags: ['autodocs'],
  component: (props: SelectProps) => <SelectContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    required: true,
    label: 'Pick a game',
    options: ['Dark Souls 1', 'Dark Souls 2', 'Dark Souls 3', 'Sekiro'],
  },
}
