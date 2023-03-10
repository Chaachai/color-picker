/**
 * Generates an array of six hex colors
 *
 * @returns {string[]} An array of hex color strings
 */
export const generateHexColors = (): string[] => {
  const hexChars = '0123456789ABCDEF';
  let colors = [];
  for (let i = 0; i < 6; i++) {
    let hex = '#';
    for (let j = 0; j < 6; j++) {
      hex += hexChars[Math.floor(Math.random() * 16)];
    }
    colors.push(hex);
  }
  return colors;
};

/**
 * Checks if a given color code is valid (in hexadecimal format).
 *
 * @param {string} color - The color code to validate.
 * @returns {boolean} - `true` if the color code is valid, `false` otherwise.
 */
export const isValidHexColor = (color: string) => {
  const regex = /^#([0-9a-f]{3}){1,2}$/i;
  return regex.test(color);
};