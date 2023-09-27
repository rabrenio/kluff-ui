import { forwardRef } from 'react'
import { TextField, type TextFieldProps } from '@mui/material'

export type LongTextProps = Omit<TextFieldProps, 'multiline'>

const LongText = forwardRef<HTMLDivElement, LongTextProps>(
  ({ rows = 4, ...props }, ref) => (
    <TextField {...props} multiline ref={ref} rows={rows} />
  )
)

export default LongText
