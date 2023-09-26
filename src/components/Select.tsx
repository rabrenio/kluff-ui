import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select as ReactSelect,
  type SelectProps as ReactSelectProps,
} from '@mui/material'

export type SelectOption = string

export type SelectProps = {
  label?: string
  options: SelectOption[]
  size: FormControlProps['size']
} & ReactSelectProps

export default function Select({
  label,
  options,
  size = 'small',
  ...props
}: SelectProps) {
  return (
    <FormControl fullWidth size={size}>
      {label && <InputLabel>{label}</InputLabel>}
      <ReactSelect {...props}>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </ReactSelect>
    </FormControl>
  )
}
