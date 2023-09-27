export declare function convertTimeToDate(time: string): Date;
export declare const TIME_FORMAT_OUT = "HH:mm:ss";
export declare const DATE_FORMAT_OUT = "yyyy-MM-dd";
type FormatOut = typeof TIME_FORMAT_OUT | typeof DATE_FORMAT_OUT;
export declare function formateDate(date: Date, formatOut?: FormatOut): string;
export declare function toISOFormat(date: Date): string;
export {};
