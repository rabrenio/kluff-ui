import { type ReactNode } from 'react';
import { type DesktopDatePickerProps } from '@mui/x-date-pickers';
type InputProps = {
    error?: boolean;
    required?: boolean;
    helperText?: ReactNode;
};
export type DatePickerProps = {
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<DesktopDatePickerProps<Date | null, Date>, 'value' | 'onChange'>;
declare const DatePicker: import("react").ForwardRefExoticComponent<{
    value: null | string;
    onChange: (value: string | null) => void;
} & InputProps & Omit<DesktopDatePickerProps<Date | null, Date>, "onChange" | "value"> & import("react").RefAttributes<HTMLDivElement>>;
export default DatePicker;
