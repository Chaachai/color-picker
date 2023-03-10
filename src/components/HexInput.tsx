import React from 'react';
import { IHexInputProps } from 'components/types';
import { HEX_INPUT_PLACEHOLDER } from 'utils/constants';

/**
 * A React component that allows the user to input a color value in hexadecimal.
 * @component
 */

export const HexInput: React.FC<IHexInputProps> = ({ errorMessage, handleHexInput }) => (
  <label>
    <input className='color-input' placeholder={HEX_INPUT_PLACEHOLDER} type="text" onChange={handleHexInput} />
    {errorMessage && <p className='hex-input' >{ errorMessage }</p>}
  </label>
);
