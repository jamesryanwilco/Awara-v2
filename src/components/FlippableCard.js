import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import { COLORS, SIZES, FONTS } from '../styles/themes';
import FeedbackModal from './FeedbackModal';
import { useUserProgress } from '../services/UserProgressContext';

const difficultyColors = {
  easy: COLORS.success,
  medium: COLORS.warning,
  hard: COLORS.danger,
};

const FlippableCard = ({ challenge, deckId, cardIndex, totalCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shootConfetti, setShootConfetti] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const { completeChallenge, progress } = useUserProgress();

  const hasBeenCompleted = progress.completedChallenges.includes(challenge.id);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const handleComplete = () => {
    // Always award XP for testing purposes, as requested
    completeChallenge(challenge.id, deckId, challenge.xp);
    setShootConfetti(true);
    setModalVisible(true);
    // After completing, flip back to the front if it's flipped
    if (isFlipped) {
      flipCard();
    }
  };

  const flipCard = () => {
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const CardHeader = () => (
    <View style={styles.header}>
      <Text style={[styles.difficulty, { color: difficultyColors[challenge.difficulty] }]}>
        {challenge.difficulty.toUpperCase()}
      </Text>
      {hasBeenCompleted && (
        <Ionicons name="checkmark-circle" size={24} color={COLORS.success} style={styles.checkmark} />
      )}
      <View style={styles.headerRight}>
        <Text style={styles.xp}>{challenge.xp} XP</Text>
        <Text style={styles.cardCounter}>{`${cardIndex + 1}/${totalCards}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Front of Card (Locked) */}
      <Animated.View
        style={[styles.card, frontAnimatedStyle]}
        pointerEvents={isFlipped ? 'none' : 'auto'}
      >
        <CardHeader />
        <View style={styles.hintContainer}>
          <Text style={styles.hintLabel}>Hint:</Text>
          <Text style={styles.hintText}>{challenge.hint}</Text>
        </View>
        <TouchableOpacity style={styles.selectButton} onPress={flipCard}>
          <Text style={styles.selectButtonText}>Select Challenge</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Back of Card (Unlocked) */}
      <Animated.View
        style={[styles.card, styles.cardBack, backAnimatedStyle]}
        pointerEvents={isFlipped ? 'auto' : 'none'}
      >
        <CardHeader />
        <Text style={styles.cardText}>{challenge.text}</Text>
        <TouchableOpacity style={styles.selectButton} onPress={handleComplete}>
          <Text style={styles.selectButtonText}>Complete Challenge</Text>
        </TouchableOpacity>
      </Animated.View>

      <FeedbackModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        shootConfetti={shootConfetti}
        onConfettiComplete={() => setShootConfetti(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
  },
  card: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.surface2,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardBack: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCounter: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginLeft: SIZES.base,
  },
  checkmark: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -12 }],
  },
  difficulty: {
    ...FONTS.h3,
    fontWeight: 'bold',
  },
  xp: {
    ...FONTS.h3,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  hintContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  hintLabel: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginBottom: SIZES.base,
  },
  hintText: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.text,
  },
  selectButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding / 2,
    borderRadius: SIZES.radius,
    width: '100%',
    alignItems: 'center',
  },
  selectButtonText: {
    ...FONTS.h3,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  cardText: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.text,
    flex: 1,
    marginTop: SIZES.padding,
  },
});

export default FlippableCard;
