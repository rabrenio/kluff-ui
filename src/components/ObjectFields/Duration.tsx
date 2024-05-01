import { type ReactNode, forwardRef } from 'react'
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Popover,
  Stack,
  type InputProps,
  ClickAwayListener,
} from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import NumberPicker, { type NumberPickerProps } from './NumberPicker'
import useMenuState from '../../utils/useMenuState'

function canRoundOff(value: string) {
  return value === '60'
}

function toValue(hours: string, minutes: string, seconds: string) {
  const value = []

  if (hours) value.push(`${hours}h`)
  if (minutes) value.push(`${minutes}m`)
  if (seconds) value.push(`${seconds}s`)

  return value.join(' ')
}

function extractValue(value: string) {
  let hours = ''
  let minutes = ''
  let seconds = ''

  const hourMatch = value.match(/(\d+)h/)
  if (hourMatch) hours = Number.parseInt(hourMatch[1], 10).toString()

  const minuteMatch = value.match(/(\d+)m/)
  if (minuteMatch) {
    minutes = Number.parseInt(minuteMatch[1], 10).toString()
  }

  const secondMatch = value.match(/(\d+)s/)
  if (secondMatch) seconds = Number.parseInt(secondMatch[1], 10).toString()

  return [hours, minutes, seconds]
}

function DurationInput(props: Omit<NumberPickerProps, 'sx' | 'size'>) {
  return (
    <NumberPicker
      {...props}
      size="small"
      sx={{ width: 80 }}
      onKeyDown={e => {
        if (e.key === '0') e.preventDefault()
      }}
    />
  )
}

export type DurationProps = {
  value?: string
  label?: ReactNode
  helperText?: ReactNode
  onChange: (value: string) => void
} & Omit<InputProps, 'value' | 'onChange'>

const Duration = forwardRef<unknown, DurationProps>(
  (
    { error, required, label, helperText, value = '', onChange, ...props },
    ref
  ) => {
    const { anchorEl, setAnchorEl, handleClose } =
      useMenuState<HTMLDivElement>()
    const [hours = '', minutes = '', seconds = ''] = extractValue(value)

    return (
      <ClickAwayListener
        onClickAway={() => {
          setAnchorEl(null)
        }}
      >
        <>
          <FormControl
            error={error}
            onClick={e => {
              setAnchorEl(e.currentTarget)
            }}
          >
            {label && <InputLabel required={required}>{label}</InputLabel>}
            <Input
              {...props}
              readOnly
              ref={ref}
              value={value}
              endAdornment={
                <InputAdornment position="start">
                  {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
                </InputAdornment>
              }
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
          <Popover
            anchorEl={anchorEl}
            open={!!anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            onClose={handleClose}
          >
            <Stack direction="row" gap={2} sx={{ p: 1 }}>
              <DurationInput
                value={Number.parseInt(hours, 10)}
                label="Hour(s)"
                onChange={e => {
                  onChange(toValue(e.target.value, minutes, seconds))
                }}
              />
              <DurationInput
                value={Number.parseInt(minutes, 10)}
                label="Minute(s)"
                onChange={e => {
                  const nextMinutes = e.target.value
                  const nextValue = canRoundOff(nextMinutes)
                    ? toValue(hours + 1, '0', seconds)
                    : toValue(hours, nextMinutes, seconds)

                  onChange(nextValue)
                }}
              />
              <DurationInput
                value={Number.parseInt(seconds, 10)}
                label="Second(s)"
                onChange={e => {
                  const nextSeconds = e.target.value
                  const nextValue = canRoundOff(nextSeconds)
                    ? toValue(hours, minutes + 1, '0')
                    : toValue(hours, minutes, nextSeconds)

                  onChange(nextValue)
                }}
              />
            </Stack>
          </Popover>
        </>
      </ClickAwayListener>
    )
  }
)

export default Duration
