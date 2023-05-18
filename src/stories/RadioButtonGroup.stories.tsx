import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import RadioButtonGroup, {
  RadioButtonGroupDirections,
  type Option,
  type RadioButtonGroupProps,
} from '../components/RadioButtonGroup'

type MetaProps = Pick<RadioButtonGroupProps, 'label' | 'options'>

function RadioButtonGroupContainer(props: MetaProps) {
  const [value, setValue] = useState<Option['value']>(null!)
  return (
    <RadioButtonGroup
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Basic/RadioButtonGroup',
  tags: ['autodocs'],
  component: (props: MetaProps) => <RadioButtonGroupContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    required: true,
    label: 'Pick a game',
    direction: RadioButtonGroupDirections.Vertical,
    options: [
      { value: '1', label: 'Dark Souls 3' },
      { value: '2', label: 'Sekiro' },
    ],
  },
}
