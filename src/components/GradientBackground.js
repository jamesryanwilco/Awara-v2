import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/themes';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={[COLORS.background, COLORS.surface1]}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientBackground;
