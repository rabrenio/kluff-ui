import { forwardRef } from 'react'
import FloatNumberPicker, {
  type FloatNumberPickerProps,
} from './FloatNumberPicker'

// TODO: add currency type when its supported
export type CurrencyProps = FloatNumberPickerProps

const Currency = forwardRef<HTMLDivElement, CurrencyProps>((props, ref) => (
  <FloatNumberPicker {...props} ref={ref} />
))

export default Currency
