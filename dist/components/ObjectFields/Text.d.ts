/// <reference types="react" />
import { type TextFieldProps } from '@mui/material';
export type TextProps = TextFieldProps;
declare const Text: import("react").ForwardRefExoticComponent<(Omit<import("@mui/material").StandardTextFieldProps, "ref"> | Omit<import("@mui/material").FilledTextFieldProps, "ref"> | Omit<import("@mui/material").OutlinedTextFieldProps, "ref">) & import("react").RefAttributes<HTMLDivElement>>;
export default Text;
