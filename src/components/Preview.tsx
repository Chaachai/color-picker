import React from 'react';
import { IPreviewProps } from 'components/types';

/**
 * A React component that allows the user to preview the selected color.
 * @component
 */

export const Preview: React.FC<IPreviewProps> = ({ selectedColor }) => (
  <div className='preview' style={{ backgroundColor: selectedColor }}>
    <span>{ selectedColor }</span>
  </div>
);
