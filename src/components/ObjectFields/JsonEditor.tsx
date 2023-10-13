import { type ComponentProps, type ReactNode, forwardRef } from 'react'
import {
  FormControl,
  type FormControlProps,
  FormHelperText,
  FormLabel,
} from '@mui/material'
import { JsonEditor as Editor } from 'jsoneditor-react'
import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/github'
import 'jsoneditor-react/es/editor.min.css'

export type JsonEditorProps = {
  label?: string
  required?: boolean
  error?: boolean
  helperText?: ReactNode
  containerProps: Omit<FormControlProps, 'error'>
} & Omit<ComponentProps<typeof Editor>, 'innerRef' | 'mode'>

const JsonEditor = forwardRef<HTMLDivElement, JsonEditorProps>(
  (
    {
      label,
      required,
      error,
      helperText,
      value = '',
      containerProps = {},
      ...props
    },
    ref
  ) => (
    <FormControl {...containerProps} error={error}>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <Editor
        {...props}
        value={value}
        innerRef={ref}
        ace={ace}
        mode="code"
        theme="ace/theme/github"
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
)

export default JsonEditor
