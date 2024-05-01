import { TabListProps as TLP, TabList as TL } from '@mui/lab'

export type TabListProps = TLP

export default function TabList({ children, ...props }: TabListProps) {
  return <TL {...props}>{children}</TL>
}
