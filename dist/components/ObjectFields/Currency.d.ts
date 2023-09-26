/// <reference types="react" />
import { type FloatNumberPickerProps } from './FloatNumberPicker';
export type CurrencyProps = FloatNumberPickerProps;
declare const Currency: import("react").ForwardRefExoticComponent<Omit<FloatNumberPickerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Currency;
