import { CircularProgress, type CircularProgressProps } from '@mui/material'

export default function LoadingIndicator(props: CircularProgressProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <CircularProgress {...props} />
    </div>
  )
}
