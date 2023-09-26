/// <reference types="react" />
import { type NumberPickerProps } from './NumberPicker';
export type FloatNumberPickerProps = NumberPickerProps & {
    precision?: number;
};
declare const FloatNumberPicker: import("react").ForwardRefExoticComponent<Omit<FloatNumberPickerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default FloatNumberPicker;
