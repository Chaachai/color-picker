import React, { useState } from 'react';
import { ColorPalette, Preview, HexInput } from 'components';
import { generateHexColors, isValidHexColor, APP_TITLE, INVALID_COLOR_MESSAGE } from 'utils';

const PALETTE_COLORS = generateHexColors();
const FIRST_COLOR = PALETTE_COLORS[0];

/**
 * A React component that allows the user to select a color from a palette or input a color code in hexadecimal format.
 * @component
 */

export const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>(FIRST_COLOR);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Handler function that is called when the user selects a color from the palette.
   *
   * @param {string} color - The selected color code in hexadecimal format.
   */
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  /**
   * Handler function that is called when the user inputs a color code in the text input field.
   * Validates the input and updates the selected color or displays an error message.
   *
   * @param {Object} event - The input change event object.
   */
  const handleHexInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = event.target.value;
    if (isValidHexColor(hexColor)) {
      setSelectedColor(hexColor);
      setErrorMessage(null);
    } else {
      setSelectedColor(FIRST_COLOR);
      setErrorMessage(INVALID_COLOR_MESSAGE);
    }
  };

  return (
    <div className='App'>
      <h2 className='title'>{APP_TITLE}</h2>

      <ColorPalette colors={PALETTE_COLORS} onColorChange={handleColorChange} />

      <HexInput errorMessage={errorMessage} handleHexInput={handleHexInput} />

      <Preview selectedColor={selectedColor} />
    </div>
  );
};

export default App;
