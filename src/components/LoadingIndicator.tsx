import { CircularProgress, type CircularProgressProps } from '@mui/material'

export type LoadingIndicatorProps = CircularProgressProps
export default function LoadingIndicator(props: LoadingIndicatorProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <CircularProgress {...props} />
    </div>
  )
}
