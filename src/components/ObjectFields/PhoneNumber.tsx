import { forwardRef } from 'react'
import Text, { type TextProps } from './Text'

export type PhoneNumberProps = Omit<TextProps, 'type'>

const PhoneNumber = forwardRef<HTMLDivElement, PhoneNumberProps>(
  (props, ref) => <Text {...props} type="tel" ref={ref} />
)

export default PhoneNumber
