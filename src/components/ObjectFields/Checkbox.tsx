import { ReactNode, forwardRef } from 'react'
import {
  Checkbox as ReactCheckbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  type CheckboxProps as ReactCheckboxProps,
} from '@mui/material'

export type CheckboxProps = {
  label?: ReactNode
  error?: boolean
  required?: boolean
  helperText?: ReactNode
  value?: ReactCheckboxProps['checked']
} & Omit<ReactCheckboxProps, 'checked'>

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, value, error, helperText, required, ...props }, ref) => (
    <FormControl error={error} required={required}>
      <FormControlLabel
        label={label}
        control={<ReactCheckbox {...props} ref={ref} checked={value} />}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
)

export default Checkbox
