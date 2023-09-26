/// <reference types="react" />
import { type TextProps } from './Text';
export type PhoneNumberProps = Omit<TextProps, 'type'>;
declare const PhoneNumber: import("react").ForwardRefExoticComponent<Omit<PhoneNumberProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default PhoneNumber;
