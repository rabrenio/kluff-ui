import { forwardRef } from 'react'
import { roundTo } from 'round-to'
import NumberPicker, {
  type NumberPickerProps,
  NUMBER_PICKER_DEFAULT_INPUT_PROPS,
} from './NumberPicker'
import { MAX_DECIMAL_PLACE, MIN_DECIMAL_PLACE } from './utils'

const FLOAT_NUMBER_DEFAULT_INPUT_PROPS = {
  ...NUMBER_PICKER_DEFAULT_INPUT_PROPS,
  max: 24,
}

export type FloatNumberPickerProps = NumberPickerProps & {
  precision?: number
}

const FloatNumberPicker = forwardRef<HTMLDivElement, FloatNumberPickerProps>(
  (
    {
      precision = 2,
      inputProps = FLOAT_NUMBER_DEFAULT_INPUT_PROPS,
      onChange,
      ...props
    },
    ref
  ) => {
    const decimalPlaces = precision ?? MIN_DECIMAL_PLACE
    return (
      <NumberPicker
        {...props}
        ref={ref}
        inputProps={inputProps}
        onChange={e => {
          const currentValue = e.target.value
          const roundedValue = roundTo(
            Number.parseFloat(currentValue),
            decimalPlaces
          )

          onChange({
            ...e,
            target: {
              ...e.target,
              value:
                Number.isNaN(roundedValue) ||
                decimalPlaces < MIN_DECIMAL_PLACE ||
                decimalPlaces > MAX_DECIMAL_PLACE
                  ? currentValue
                  : String(roundedValue.toFixed(decimalPlaces)),
            },
          })
        }}
      />
    )
  }
)

export default FloatNumberPicker
