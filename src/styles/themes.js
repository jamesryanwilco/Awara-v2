export const COLORS = {
  primary: '#1E88E5', // A brighter blue for dark mode
  success: '#66BB6A', // A slightly lighter green
  warning: '#FFA726', // A nice orange
  white: '#FFFFFF',

  // Dark Theme Palette
  background: '#121212',
  card: '#1E1E1E',
  text: '#E0E0E0',
  textSecondary: '#A0A0A0',
  border: '#2C2C2C',
  
  // Old names for compatibility, pointing to new dark theme colors
  lightGray: '#121212', // Now background
  darkGray: '#E0E0E0',  // Now text
  secondary: '#A0A0A0', // Now textSecondary
  textColor: '#E0E0E0', // Now text
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  body1: 30,
  body2: 22,
  body3: 16,
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, fontWeight: 'bold' },
  h2: { fontSize: SIZES.h2, fontWeight: 'bold' },
  h3: { fontSize: SIZES.h3, fontWeight: 'normal' },
  body1: { fontSize: SIZES.body1 },
  body2: { fontSize: SIZES.body2 },
  body3: { fontSize: SIZES.body3 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
