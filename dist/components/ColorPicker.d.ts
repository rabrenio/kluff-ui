import { type ComponentProps } from 'react';
import { RgbaStringColorPicker } from 'react-colorful';
type RgbaStringColorPickerProps = ComponentProps<typeof RgbaStringColorPicker>;
export type ColorPickerProps = {
    label?: string;
    value: RgbaStringColorPickerProps['color'];
    onChange: RgbaStringColorPickerProps['onChange'];
};
export default function ColorPicker({ label, value, onChange, }: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
