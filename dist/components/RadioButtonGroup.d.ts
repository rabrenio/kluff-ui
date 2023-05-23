import { type ReactNode } from 'react';
import { type FormControlProps, type RadioGroupProps } from '@mui/material';
export declare enum RadioButtonGroupDirections {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export interface Option {
    label: string;
    value: string;
}
export type RadioButtonGroupProps = {
    label?: string;
    required?: boolean;
    options: Option[];
    error?: boolean;
    helperText?: ReactNode;
    direction?: RadioButtonGroupDirections;
    formControlProps?: FormControlProps;
} & RadioGroupProps;
export default function RadioButtonGroup({ label, required, options, error, helperText, className, formControlProps, direction, ...props }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
