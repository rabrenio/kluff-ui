import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import Currency, {
  type CurrencyProps,
} from '../../components/ObjectFields/Currency'

function CurrencyContainer(props: CurrencyProps) {
  const [value, setValue] = useState('')
  return (
    <Currency
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<CurrencyProps> = {
  title: 'ObjectFields/Currency',
  tags: ['autodocs'],
  component: (props: CurrencyProps) => <CurrencyContainer {...props} />,
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
