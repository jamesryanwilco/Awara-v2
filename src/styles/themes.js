export const COLORS = {
  // Accent Colors
  primary: '#FF4081', // Reddish-pink
  accentBlue: '#007BFF',
  accentTeal: '#2CB67D',
  success: '#2CB67D', // Teal for success
  warning: '#FFA726', // Orange
  danger: '#F05D5E', // A modern, soft red for errors and warnings
  
  // Text Colors
  text: '#F5F5F5',
  textSecondary: '#A0A0A0',
  textDisabled: '#5A5A5A',

  // Surface Colors
  background: '#121212', // Base background
  surface1: '#1A1A1A',   // Slightly elevated surfaces
  surface2: '#1E1E1E',   // Cards, etc.
  
  // Other
  border: '#2C2C2C',
  white: '#FFFFFF',
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 16, // Increased for a softer, more modern look
  padding: 24,

  // Font sizes
  h1: 32,
  h2: 24,
  h3: 18,
  body1: 16, // Main body text
  body2: 14, // Secondary body text
  body3: 12, // Captions/small text
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, fontWeight: '700' },
  h2: { fontSize: SIZES.h2, fontWeight: '600' },
  h3: { fontSize: SIZES.h3, fontWeight: '500' },
  body1: { fontSize: SIZES.body1, fontWeight: '400' },
  body2: { fontSize: SIZES.body2, fontWeight: '400' },
  body3: { fontSize: SIZES.body3, fontWeight: '400' },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
