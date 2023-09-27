import {
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  format,
} from 'date-fns'

function isValidTimeString(time: string) {
  const pattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  return pattern.test(time)
}

export function convertTimeToDate(time: string) {
  if (!isValidTimeString(time))
    throw Error(`Invalid format passed ${time}, expected 00:00:00`)

  const [hours, minutes, seconds] = time.split(':').map(Number)

  const today = new Date()
  return setMilliseconds(
    setSeconds(setMinutes(setHours(today, hours), minutes), seconds),
    0
  )
}

export const TIME_FORMAT_OUT = 'HH:mm:ss'
export const DATE_FORMAT_OUT = 'yyyy-MM-dd'

type FormatOut = typeof TIME_FORMAT_OUT | typeof DATE_FORMAT_OUT

export function formateDate(
  date: Date,
  formatOut: FormatOut = DATE_FORMAT_OUT
) {
  return format(date, formatOut)
}

export function toISOFormat(date: Date) {
  return date.toISOString()
}
