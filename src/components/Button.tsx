import { Link } from 'react-router-dom'
import { Button as MuiButton, type ButtonProps as ButtonPropss } from '@mui/material'

export type ButtonProps = ButtonPropss
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton {...props} LinkComponent={Link}>
      {children}
    </MuiButton>
  )
}
