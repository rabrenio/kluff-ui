import { type ComponentProps, type ReactNode, forwardRef, useMemo } from 'react'
import {
  FormControl,
  type FormControlProps,
  FormHelperText,
  FormLabel,
} from '@mui/material'
import uniqueId from 'lodash.uniqueid'
import { JsonEditor as Editor } from 'jsoneditor-react'
import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/github'
import 'jsoneditor-react/es/editor.min.css'

export type JsonEditorProps = {
  label?: string
  required?: boolean
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
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
      disabled,
      readOnly,
      containerProps = {},
      ...props
    },
    ref
  ) => {
    // mode is bugged when value is change
    // to fix, force rerender when disabled or readOnly are changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const key = useMemo(() => uniqueId('JsonEditor'), [disabled, readOnly])
    return (
      <FormControl {...containerProps} error={error}>
        {label && <FormLabel required={required}>{label}</FormLabel>}
        <Editor
          {...props}
          key={key}
          value={value}
          innerRef={ref}
          ace={ace}
          mode={disabled || readOnly ? 'view' : 'code'}
          theme="ace/theme/github"
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
)

export default JsonEditor
