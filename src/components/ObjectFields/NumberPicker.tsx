import { type ChangeEventHandler, forwardRef } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export const NUMBER_PICKER_DEFAULT_INPUT_PROPS = {
  step: 'any',
  min: 0,
}

export type NumberPickerProps = {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
} & Omit<TextFieldProps, 'onChange'>

const NumberPicker = forwardRef<HTMLDivElement, NumberPickerProps>(
  ({ inputProps = NUMBER_PICKER_DEFAULT_INPUT_PROPS, ...props }, ref) => (
    <TextField {...props} ref={ref} type="number" inputProps={inputProps} />
  )
)

export default NumberPicker
