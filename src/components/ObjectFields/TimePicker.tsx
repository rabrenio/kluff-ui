import { type ReactNode, forwardRef } from 'react'
import {
  TimePicker as ReactTimePicker,
  type TimePickerProps as ReactTimePickerProps,
} from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import {
  TIME_FORMAT_OUT,
  convertTimeToDate,
  formateDate,
} from '../../utils/date'

type InputProps = {
  error?: boolean
  required?: boolean
  helperText?: ReactNode
}

export type TimePickerProps = {
  value: null | string
  onChange: (value: string | null) => void
} & InputProps &
  Omit<ReactTimePickerProps<Date | null, Date>, 'value' | 'onChange'>

const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (
    { error, helperText, required, className, value, onChange, ...props },
    ref
  ) => {
    const time = value ? convertTimeToDate(value) : new Date()
    return (
      <ReactTimePicker
        {...props}
        ref={ref}
        value={time}
        renderInput={inputProps => (
          <TextField
            {...inputProps}
            required={required}
            error={error}
            helperText={helperText}
            className={className}
          />
        )}
        onChange={nextValue => {
          onChange(nextValue ? formateDate(nextValue, TIME_FORMAT_OUT) : null)
        }}
      />
    )
  }
)

export default TimePicker
