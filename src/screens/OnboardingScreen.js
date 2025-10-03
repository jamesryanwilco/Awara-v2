import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { COLORS, SIZES, FONTS } from '../styles/themes';
import { useUserProgress } from '../services/UserProgressContext';

const GOALS = {
  WEIGHT: 'Weight Management',
  EMOTIONAL: 'Reduce Emotional Eating',
  GENERAL: 'Improve General Health',
};

const OnboardingScreen = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const { setGoal } = useUserProgress();

  const handleContinue = () => {
    if (!selectedGoal) {
      Alert.alert('Please select a goal to continue.');
      return;
    }
    setGoal(selectedGoal);
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Awara</Text>
      <Text style={styles.subtitle}>What's your primary goal?</Text>

      <View style={styles.optionsContainer}>
        {Object.values(GOALS).map((goal) => (
          <TouchableOpacity
            key={goal}
            style={[
              styles.optionButton,
              selectedGoal === goal && styles.selectedOption,
            ]}
            onPress={() => setSelectedGoal(goal)}
          >
            <Text style={styles.optionText}>{goal}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.explanation}>
        You’ll level up by choosing and completing mindful eating challenges from different card decks.
      </Text>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  subtitle: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.secondary,
    marginBottom: SIZES.padding,
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  selectedOption: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  optionText: {
    ...FONTS.body3,
    color: COLORS.textColor,
  },
  explanation: {
    marginTop: SIZES.padding,
    ...FONTS.body3,
    textAlign: 'center',
    color: COLORS.secondary,
  },
  continueButton: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: SIZES.radius,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
