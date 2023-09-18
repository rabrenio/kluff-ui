import { type ReactNode } from 'react';
import { type DialogProps } from '@mui/material';
export type AlertDialogProps = {
    /**
     * message of the dialog
     * */
    body: ReactNode;
    cancelText?: string;
    confirmText?: string;
    onConfirm: () => void;
    onClose: () => void;
} & DialogProps;
declare function AlertDialog({ open, body, title, cancelText, confirmText, onClose, onConfirm, }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof AlertDialog>;
export default _default;
