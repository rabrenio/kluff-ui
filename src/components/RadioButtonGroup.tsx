import {
  FormControl,
  type FormControlProps,
  FormLabel,
  RadioGroup,
  type RadioGroupProps,
} from '@mui/material'
import RadioButton from './RadioButton'

export enum RadioButtonGroupDirections {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface Option {
  label: string
  value: string
}

export type RadioButtonGroupProps = {
  label?: string
  required?: boolean
  options: Option[]
  direction?: RadioButtonGroupDirections
  formControlProps?: FormControlProps
} & RadioGroupProps

export default function RadioButtonGroup({
  label,
  required,
  options,
  className = '',
  formControlProps,
  direction = RadioButtonGroupDirections.Vertical,
  ...props
}: RadioButtonGroupProps) {
  return (
    <FormControl
      {...formControlProps}
      className={`flex flex-col ${formControlProps?.className ?? ''}`}
    >
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <RadioGroup
        {...props}
        className={`${className} ${
          direction === RadioButtonGroupDirections.Horizontal ? '!flex-row' : ''
        }`}
      >
        {options.map(option => (
          <RadioButton
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
