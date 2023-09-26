import { useCallback, useMemo, useState } from 'react'

export default function useMenuState<T = HTMLElement>() {
  const [anchorEl, setAnchorEl] = useState<T | null>(null)
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
