import { type LoadingButtonProps } from '@mui/lab';
import { type AlertDialogProps } from './AlertDialog';
type Props = Omit<LoadingButtonProps, 'onClick'> & {
    onConfirm: AlertDialogProps['onConfirm'];
    alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose' | 'onConfirm'>;
};
export default function ButtonWithConfirm({ children, alertDialogProps, onConfirm, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
