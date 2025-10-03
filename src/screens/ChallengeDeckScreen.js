import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { challenges, DECKS } from '../data/challenges';
import { COLORS, SIZES, FONTS } from '../styles/themes';
import GradientBackground from '../components/GradientBackground';

const ChallengeDeckScreen = ({ navigation }) => {
  const awarenessDeck = challenges[DECKS.AWARENESS_BASICS];
  const presenceDeck = challenges[DECKS.PRESENCE_CONTROL];

  const handleDeckPress = (deckId, deckTitle) => {
    navigation.navigate('ChallengeSwiper', { deckId, deckTitle });
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Deck</Text>
        <TouchableOpacity
          style={styles.deck}
          onPress={() => handleDeckPress(DECKS.AWARENESS_BASICS, awarenessDeck.title)}
        >
          <Text style={styles.deckTitle}>{awarenessDeck.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deck}
          onPress={() => handleDeckPress(DECKS.PRESENCE_CONTROL, presenceDeck.title)}
        >
          <Text style={styles.deckTitle}>{presenceDeck.title}</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: SIZES.padding,
  },
  deck: {
    backgroundColor: COLORS.surface2,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  deckTitle: {
    ...FONTS.h2,
    color: COLORS.text,
  },
});

export default ChallengeDeckScreen;
