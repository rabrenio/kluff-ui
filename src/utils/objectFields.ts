type ObjectFieldFiedType = typeof OBJECT_FIELD_FIELD_TYPE
export type ObjectFieldFiedTypeValue =
  ObjectFieldFiedType[keyof ObjectFieldFiedType]
export const OBJECT_FIELD_FIELD_TYPE = {
  Check: 'Check',
  Currency: 'Currency',
  Date: 'Date',
  DateTime: 'Datetime',
  Duration: 'Duration',
  Float: 'Float',
  Int: 'Int',
  JSON: 'JSON',
  LongInt: 'Long Int',
  LongText: 'Long Text',
  Phone: 'Phone',
  Select: 'Select',
  Text: 'Text',
  Time: 'Time',
} as const

export const isFieldText = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Text
export const isFieldLongText = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.LongText
export const isFieldInt = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Int
export const isFieldLongInt = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.LongInt
export const isFieldFloat = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Float
export const isFieldCurrency = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Currency
export const isFieldCheck = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Check
export const isFieldDate = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Date
export const isFieldDateTime = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.DateTime
export const isFieldTime = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Time
export const isFieldDuration = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Duration
export const isFieldPhone = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Phone
export const isFieldSelect = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.Select
export const isFieldJSON = (type: ObjectFieldFiedTypeValue) =>
  type === OBJECT_FIELD_FIELD_TYPE.JSON

export const MIN_DECIMAL_PLACE = 0
export const MAX_DECIMAL_PLACE = 100
