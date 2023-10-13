type ObjectFieldType = typeof OBJECT_FIELD_TYPE
export type ObjectFieldTypeValue = ObjectFieldType[keyof ObjectFieldType]
export const OBJECT_FIELD_TYPE = {
  Check: 'Check',
  Currency: 'Currency',
  Date: 'Date',
  DateTime: 'DateTime',
  Duration: 'Duration',
  Float: 'Float',
  Int: 'Int',
  JSON: 'JSON',
  Link: 'Link',
  LongInt: 'Long Int',
  LongText: 'Long Text',
  Phone: 'Phone',
  Select: 'Select',
  Text: 'Text',
  Time: 'Time',
} as const

export const isFieldText = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Text
export const isFieldLongText = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.LongText
export const isFieldInt = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Int
export const isFieldLongInt = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.LongInt
export const isFieldFloat = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Float
export const isFieldCurrency = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Currency
export const isFieldCheck = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Check
export const isFieldDate = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Date
export const isFieldDateTime = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.DateTime
export const isFieldTime = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Time
export const isFieldDuration = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Duration
export const isFieldPhone = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Phone
export const isFieldSelect = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Select
export const isFieldJSON = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.JSON
export const isFieldLink = (type: ObjectFieldTypeValue) =>
  type === OBJECT_FIELD_TYPE.Link

export const MIN_DECIMAL_PLACE = 0
export const MAX_DECIMAL_PLACE = 100
