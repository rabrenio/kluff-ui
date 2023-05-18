import type { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  children: ReactNode
}

export default function TabPanel({ children, ...other }: Props) {
  return (
    <div {...other} role="tabpanel">
      <Box className="h-full p-24">{children}</Box>
    </div>
  )
}
