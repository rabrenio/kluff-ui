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
    direction?: RadioButtonGroupDirections;
    formControlClassName?: string;
} & RadioGroupProps & Pick<FormControlProps, 'size'>;
export default function RadioButtonGroup({ size, label, required, options, className, formControlClassName, direction, ...props }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
