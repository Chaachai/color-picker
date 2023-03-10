import { ChangeEvent } from 'react';

export interface IPaletteProps {
  onColorChange: (color: string) => void;
  colors: string[];
}

export interface IHexInputProps {
  errorMessage: string | null;
  handleHexInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPreviewProps {
  selectedColor: string;
}
