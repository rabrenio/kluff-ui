import { type ComponentProps } from 'react'
import { InputLabel, Popover, PopoverProps } from '@mui/material'
import { RgbaStringColorPicker } from 'react-colorful'
import useMenuState from '../utils/useMenuState'

const ANCHOR_ORIGIN = {
  horizontal: 'left',
  vertical: 'bottom',
} satisfies PopoverProps['anchorOrigin']

type RgbaStringColorPickerProps = ComponentProps<typeof RgbaStringColorPicker>

export type ColorPickerProps = {
  label?: string
  value: RgbaStringColorPickerProps['color']
  onChange: RgbaStringColorPickerProps['onChange']
}

export default function ColorPicker({
  label,
  value,
  onChange,
}: ColorPickerProps) {
  const { anchorEl, setAnchorEl, handleClose } = useMenuState()
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <div
        role="button"
        className="w-[30px] h-[30px] rounded-sm border-3 border-grey-400"
        style={{
          backgroundColor: value,
        }}
        onClick={e => setAnchorEl(e.currentTarget)}
      />
      <Popover
        anchorEl={anchorEl}
        open={!!anchorEl}
        anchorOrigin={ANCHOR_ORIGIN}
        onClose={handleClose}
      >
        <RgbaStringColorPicker color={value} onChange={onChange} />
      </Popover>
    </div>
  )
}
