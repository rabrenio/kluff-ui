import { type ReactNode, forwardRef } from 'react'
import {
  DesktopDatePicker,
  type DesktopDatePickerProps,
} from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import { formateDate } from '../../utils/date'

type InputProps = {
  error?: boolean
  required?: boolean
  helperText?: ReactNode
}

export type DatePickerProps = {
  value: null | string
  onChange: (value: string | null) => void
} & InputProps &
  Omit<DesktopDatePickerProps<Date | null, Date>, 'value' | 'onChange'>

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    { error, helperText, required, className, value, onChange, ...props },
    ref
  ) => {
    const date = value ? new Date(value) : new Date()
    return (
      <DesktopDatePicker
        {...props}
        ref={ref}
        value={date}
        onChange={nextValue => {
          onChange(nextValue ? formateDate(nextValue) : null)
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

export default DatePicker
