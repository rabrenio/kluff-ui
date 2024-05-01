import { TabPanel as TP, TabPanelProps as TPP } from '@mui/lab'

export type TabPanelProps = TPP

export default function TabPanel({ children, ...props }: TabPanelProps) {
  return <TP {...props}>{children}</TP>
}
