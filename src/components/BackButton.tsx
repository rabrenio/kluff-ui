import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { IconButton, type IconButtonProps } from '@mui/material'

export default function BackButton(props: IconButtonProps) {
  return (
    <IconButton {...props} color="inherit" LinkComponent={Link}>
      <ArrowBack />
    </IconButton>
  )
}
