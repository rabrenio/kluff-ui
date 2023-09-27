import { type ReactNode } from 'react';
import { type DateTimePickerProps as ReactDateTimePickerProps } from '@mui/x-date-pickers';
type InputProps = {
    error?: boolean;
    required?: boolean;
    helperText?: ReactNode;
};
export type DateTimePickerProps = {
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<ReactDateTimePickerProps<Date | null, Date>, 'value' | 'onChange'>;
declare const DateTimePicker: import("react").ForwardRefExoticComponent<{
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<ReactDateTimePickerProps<Date | null, Date>, "onChange" | "value"> & import("react").RefAttributes<HTMLDivElement>>;
export default DateTimePicker;
