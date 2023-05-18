import { useState, useCallback } from 'react'

export default function useToggle(initiallyOpen = false) {
  const [isOpen, setOpen] = useState(initiallyOpen)
  const toggle = useCallback(() => setOpen(a => !a), [])

  return {
    isOpen,
    setOpen,
    toggle,
  }
}
