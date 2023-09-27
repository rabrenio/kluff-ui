import { type ReactNode } from 'react';
import { type TimePickerProps as ReactTimePickerProps } from '@mui/x-date-pickers';
type InputProps = {
    error?: boolean;
    required?: boolean;
    helperText?: ReactNode;
};
export type TimePickerProps = {
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<ReactTimePickerProps<Date | null, Date>, 'value' | 'onChange'>;
declare const TimePicker: import("react").ForwardRefExoticComponent<{
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<ReactTimePickerProps<Date | null, Date>, "onChange" | "value"> & import("react").RefAttributes<HTMLDivElement>>;
export default TimePicker;
