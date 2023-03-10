import React from 'react';
import { IPaletteProps } from 'components/types';

/**
 * A React component that displays a color palette for the user to select a color.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onColorChange - The callback function to call when the user selects a color.
 * @component
 */

export const ColorPalette: React.FC<IPaletteProps> = ({ colors, onColorChange }) => (
  <div className='palette'>
    {colors.map((color) => (
      <div
        key={color}
        className='colors'
        style={{ backgroundColor: color }}
        onClick={() => onColorChange(color)} />
    ))}
  </div>
);
