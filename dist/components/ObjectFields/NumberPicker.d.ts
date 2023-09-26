import { type ChangeEventHandler } from 'react';
import { TextFieldProps } from '@mui/material';
export declare const NUMBER_PICKER_DEFAULT_INPUT_PROPS: {
    step: string;
    min: number;
};
export type NumberPickerProps = {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
} & Omit<TextFieldProps, 'onChange'>;
declare const NumberPicker: import("react").ForwardRefExoticComponent<Omit<NumberPickerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default NumberPicker;
