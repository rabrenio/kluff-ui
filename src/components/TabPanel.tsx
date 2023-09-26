import type { ComponentProps } from 'react'
import { Box } from '@mui/material'

export type TabPanelProps = Omit<ComponentProps<'div'>, 'role'>

export default function TabPanel({ children, ...other }: TabPanelProps) {
  return (
    <div {...other} role="tabpanel">
      <Box className="h-full p-24">{children}</Box>
    </div>
  )
}
