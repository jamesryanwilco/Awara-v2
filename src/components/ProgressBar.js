import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../styles/themes';

const ProgressBar = ({ label, value }) => {
  const progressValue = !isNaN(value) && value > 0 ? value : 0;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.bar}>
        <View style={[styles.progress, { width: `${progressValue}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: SIZES.base,
  },
  label: {
    ...FONTS.body3,
    color: COLORS.secondary,
    marginBottom: SIZES.base,
  },
  bar: {
    height: 20,
    backgroundColor: COLORS.border,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },
});

export default ProgressBar;
