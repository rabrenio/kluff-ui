import { ButtonGroup as MuiButtonGroup, type ButtonGroupProps as  ButtonGroupPropss} from '@mui/material'

export type ButtonGroupProps = ButtonGroupPropss
export default function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return (
    <MuiButtonGroup {...props}>
      {children}
    </MuiButtonGroup>
  )
}
