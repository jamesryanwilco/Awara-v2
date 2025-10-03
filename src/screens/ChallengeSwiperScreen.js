import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { challenges } from '../data/challenges';
import FlippableCard from '../components/FlippableCard';
import { COLORS } from '../styles/themes';

const { width: screenWidth } = Dimensions.get('window');

const ChallengeSwiperScreen = ({ route }) => {
  const { deckId } = route.params;
  const deck = challenges[deckId];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {deck.challenges.map((card, index) => (
          <View style={styles.cardContainer} key={card.id}>
            <FlippableCard
              challenge={card}
              deckId={deckId}
              cardIndex={index}
              totalCards={deck.challenges.length}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  cardContainer: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ChallengeSwiperScreen;
