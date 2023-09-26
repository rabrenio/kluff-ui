import { FormControlProps, type SelectProps as ReactSelectProps } from '@mui/material';
export type SelectOption = string;
export type SelectProps = {
    label?: string;
    options: SelectOption[];
    size: FormControlProps['size'];
} & ReactSelectProps;
export default function Select({ label, options, size, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
