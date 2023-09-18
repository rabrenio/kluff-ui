import { type ComponentProps } from 'react';
import { type CircularProgressProps, type IconButtonProps } from '@mui/material';
import { type SvgIconComponent } from '@mui/icons-material';
import { type AlertDialogProps } from './AlertDialog';
type Props = Omit<IconButtonProps, 'onClick' | 'children'> & {
    loading?: boolean;
    icon: SvgIconComponent;
    iconProps: ComponentProps<SvgIconComponent>;
    alertDialogProps: Omit<AlertDialogProps, 'open' | 'onClose'>;
    circularProgressProps: CircularProgressProps;
};
export default function IconButtonWithConfirm({ loading, className, icon, iconProps, alertDialogProps, circularProgressProps, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
