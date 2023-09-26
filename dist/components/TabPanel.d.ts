import type { ComponentProps } from 'react';
export type TabPanelProps = Omit<ComponentProps<'div'>, 'role'>;
export default function TabPanel({ children, ...other }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
