import { type LoadingButtonProps } from '@mui/lab';
import { type AlertDialogProps } from './AlertDialog';
type Props = Omit<LoadingButtonProps, 'onClick'> & {
    alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>;
};
export default function ButtonWithConfirm({ children, alertDialogProps, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
