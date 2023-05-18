import { FormControlLabel, FormControlLabelProps, Radio } from '@mui/material'

export default function RadioButton(
  props: Omit<FormControlLabelProps, 'control'>
) {
  return <FormControlLabel {...props} control={<Radio className="py-3" />} />
}
