import { type RadioGroupProps } from '@mui/material';
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
} & RadioGroupProps;
export default function RadioButtonGroup({ label, required, options, className, direction, ...props }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
