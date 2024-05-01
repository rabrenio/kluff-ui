import T from '@mui/material/Tab'
import { TabProps as TP } from '@mui/material/Tab'

export type TabProps = TP

export default function Tab({ children, ...props }: TabProps) {
  return <T {...props}>{children}</T>
}
