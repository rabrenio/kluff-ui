import { type ReactNode, forwardRef } from 'react'
import {
  DateTimePicker as ReactDateTimePicker,
  type DateTimePickerProps as ReactDateTimePickerProps,
} from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import { toISOFormat } from '../../utils/date'

type InputProps = {
  error?: boolean
  required?: boolean
  helperText?: ReactNode
}

export type DateTimePickerProps = {
  value: null | string
  onChange: (value: string | null) => void
} & InputProps &
  Omit<ReactDateTimePickerProps<Date | null, Date>, 'value' | 'onChange'>

const DateTimePicker = forwardRef<HTMLDivElement, DateTimePickerProps>(
  (
    { error, helperText, required, className, value, onChange, ...props },
    ref
  ) => {
    const dateTime = value ? new Date(value) : null
    return (
      <ReactDateTimePicker
        {...props}
        ref={ref}
        value={dateTime}
        onChange={nextValue => {
          onChange(nextValue ? toISOFormat(nextValue) : null)
        }}
        renderInput={inputProps => (
          <TextField
            {...inputProps}
            required={required}
            error={error}
            helperText={helperText}
            className={className}
          />
        )}
      />
    )
  }
)

export default DateTimePicker
