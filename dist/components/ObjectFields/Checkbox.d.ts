import { ReactNode } from 'react';
import { type CheckboxProps as ReactCheckboxProps } from '@mui/material';
export type CheckboxProps = {
    label?: ReactNode;
    error?: boolean;
    required?: boolean;
    helperText?: ReactNode;
    value?: ReactCheckboxProps['checked'];
} & Omit<ReactCheckboxProps, 'checked'>;
declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Checkbox;
