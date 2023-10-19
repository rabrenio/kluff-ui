import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import JsonEditor, {
  type JsonEditorProps,
} from '../../components/ObjectFields/JsonEditor'

function JsonEditorContainer(props: JsonEditorProps) {
  const [value, setValue] = useState({ test: 'test' })
  return (
    <JsonEditor
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const meta: Meta<JsonEditorProps> = {
  title: 'ObjectFields/JsonEditor',
  tags: ['autodocs'],
  component: (props: JsonEditorProps) => <JsonEditorContainer {...props} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Enter a json',
    required: true,
    error: false,
    disabled: false,
    helperText: 'Come one type something!',
    containerProps: {
      className: 'w-full',
    },
  },
}
