import { type LoadingButtonProps } from '@mui/lab';
import { type AlertDialogProps } from './AlertDialog';
export type ButtonWithConfirmProps = Omit<LoadingButtonProps, 'onClick'> & {
    onConfirm: AlertDialogProps['onConfirm'];
    alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose' | 'onConfirm'>;
};
export default function ButtonWithConfirm({ children, alertDialogProps, onConfirm, ...props }: ButtonWithConfirmProps): import("react/jsx-runtime").JSX.Element;
