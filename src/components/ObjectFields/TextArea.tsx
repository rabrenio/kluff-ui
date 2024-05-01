import { forwardRef } from 'react'
import { TextField, type TextFieldProps } from '@mui/material'

export type TextAreaProps = Omit<TextFieldProps, 'multiline'>

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ rows = 4, ...props }, ref) => (
    <TextField {...props} multiline ref={ref} rows={rows} />
  )
)

export default TextArea
