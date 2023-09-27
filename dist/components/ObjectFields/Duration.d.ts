import { type ReactNode } from 'react';
import { type InputProps } from '@mui/material';
export type DurationProps = {
    value: string;
    label?: ReactNode;
    helperText?: ReactNode;
    onChange: (value: string) => void;
} & Omit<InputProps, 'value' | 'onChange'>;
declare const Duration: import("react").ForwardRefExoticComponent<Omit<DurationProps, "ref"> & import("react").RefAttributes<unknown>>;
export default Duration;
