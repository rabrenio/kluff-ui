import { useCallback, useMemo, useState } from 'react'

export default function useMenuState() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClose = useCallback(() => setAnchorEl(null), [])

  return useMemo(
    () => ({
      anchorEl,
      setAnchorEl,
      handleClose,
    }),
    [anchorEl]
  )
}
