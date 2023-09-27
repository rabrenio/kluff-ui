/// <reference path="../../../../src/types/jsoneditor-react.d.ts" />
import { type ComponentProps, type ReactNode } from 'react';
import { type FormControlProps } from '@mui/material';
import { JsonEditor as Editor } from 'jsoneditor-react';
export type JsonEditorProps = {
    label?: string;
    required?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    containerProps: Omit<FormControlProps, 'error'>;
} & Omit<ComponentProps<typeof Editor>, 'innerRef' | 'mode'>;
declare const JsonEditor: import("react").ForwardRefExoticComponent<{
    label?: string | undefined;
    required?: boolean | undefined;
    error?: boolean | undefined;
    helperText?: ReactNode;
    containerProps: Omit<FormControlProps, 'error'>;
} & Omit<import("jsoneditor-react").JsonEditorProps, "mode" | "innerRef"> & import("react").RefAttributes<HTMLDivElement>>;
export default JsonEditor;
