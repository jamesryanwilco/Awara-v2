import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useUserProgress } from '../services/UserProgressContext';
import ProgressBar from '../components/ProgressBar';
import { COLORS, SIZES, FONTS } from '../styles/themes';
import { challenges, DECKS } from '../data/challenges';

const ProfileScreen = () => {
  const { progress } = useUserProgress();
  const xpForNextLevel = 100; // Simplified

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <View style={styles.goalContainer}>
        <Text style={styles.goalLabel}>Primary Goal:</Text>
        <Text style={styles.goalText}>{progress.goal || 'Not set'}</Text>
        <TouchableOpacity>
          <Text style={styles.changeGoalText}>Change</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.streak}>Current Streak: {progress.streak} days</Text>

      <View style={styles.xpContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>
            {challenges[DECKS.AWARENESS_BASICS].title} - Level {progress.level[DECKS.AWARENESS_BASICS]}
          </Text>
          <ProgressBar
            value={(progress.xp[DECKS.AWARENESS_BASICS] / xpForNextLevel) * 100}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>
            {challenges[DECKS.PRESENCE_CONTROL].title} - Level {progress.level[DECKS.PRESENCE_CONTROL]}
          </Text>
          <ProgressBar
            value={(progress.xp[DECKS.PRESENCE_CONTROL] / xpForNextLevel) * 100}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: SIZES.padding,
  },
  level: {
    ...FONTS.h2,
    color: COLORS.textColor,
    marginBottom: SIZES.base,
  },
  streak: {
    ...FONTS.body3,
    color: COLORS.secondary,
    marginBottom: SIZES.padding,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: SIZES.padding / 2,
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  goalLabel: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  goalText: {
    ...FONTS.h3,
    color: COLORS.text,
    flex: 1,
    marginLeft: SIZES.base,
  },
  changeGoalText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  xpContainer: {
    width: '100%',
  },
  categoryContainer: {
    marginBottom: SIZES.padding,
  },
  categoryTitle: {
    ...FONTS.h3,
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
});

export default ProfileScreen;
