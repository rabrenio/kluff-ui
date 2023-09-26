import { forwardRef } from 'react'
import { TextField, type TextFieldProps } from '@mui/material'

export type TextProps = TextFieldProps

const Text = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => (
  <TextField {...props} ref={ref} />
))

export default Text
