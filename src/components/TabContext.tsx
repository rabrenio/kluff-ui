import { TabContextProps as TCP, TabContext as TC } from '@mui/lab'

export type TabContextProps = TCP

export default function TabContext({ children, ...props }: TabContextProps) {
  return <TC {...props}>{children}</TC>
}
