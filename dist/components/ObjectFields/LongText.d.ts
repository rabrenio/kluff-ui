/// <reference types="react" />
import { type TextFieldProps } from '@mui/material';
export type LongTextProps = Omit<TextFieldProps, 'multiline'>;
declare const LongText: import("react").ForwardRefExoticComponent<Omit<LongTextProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default LongText;
