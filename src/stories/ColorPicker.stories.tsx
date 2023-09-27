import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import ColorPicker, { type ColorPickerProps } from '../components/ColorPicker'

function ColorPickerContainer(props: ColorPickerProps) {
  const [color, setColor] = useState('#000')
  return <ColorPicker {...props} value={color} onChange={setColor} />
}

const meta: Meta<typeof ColorPicker> = {
  title: 'Basic/ColorPicker',
  tags: ['autodocs'],
  component: (props: ColorPickerProps) => <ColorPickerContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Color',
  },
}
