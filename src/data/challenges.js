export const DECKS = {
  AWARENESS_BASICS: 'AWARENESS_BASICS',
  PRESENCE_CONTROL: 'PRESENCE_CONTROL',
};

export const challenges = {
  [DECKS.AWARENESS_BASICS]: {
    title: 'Awareness Basics',
    challenges: [
      { id: 'ab1', text: 'Pause for 1 deep breath before eating.', difficulty: 'easy', xp: 10, hint: 'A moment of calm before you begin.' },
      { id: 'ab2', text: 'Put down your fork halfway through your meal.', difficulty: 'medium', xp: 20, hint: 'Create a natural pause in your eating rhythm.' },
      { id: 'ab3', text: 'Eat the first 3 bites slowly.', difficulty: 'easy', xp: 10, hint: 'Savor the beginning of your meal.' },
      { id: 'ab4', text: 'Rate hunger (1–5) before your meal.', difficulty: 'easy', xp: 10, hint: 'Check in with your body’s signals.' },
      { id: 'ab5', text: 'Notice your fullness at the end of your meal.', difficulty: 'medium', xp: 20, hint: 'Listen for when you are satisfied.' },
    ],
  },
  [DECKS.PRESENCE_CONTROL]: {
    title: 'Presence & Control',
    challenges: [
      { id: 'pc1', text: 'Eat one snack without distractions (no phone/TV).', difficulty: 'medium', xp: 25, hint: 'Focus solely on the food you are eating.' },
      { id: 'pc2', text: 'Chew each bite 10 times.', difficulty: 'easy', xp: 10, hint: 'Slow down your pace by focusing on chewing.' },
      { id: 'pc3', text: 'Pause 30 seconds before responding to a craving.', difficulty: 'hard', xp: 40, hint: 'Give yourself a moment to decide if you’re truly hungry.' },
      { id: 'pc4', text: 'Drink a glass of water before snacking.', difficulty: 'easy', xp: 10, hint: 'Hydration can often be mistaken for hunger.' },
      { id: 'pc5', text: 'End one meal with gratitude (say or think one thing).', difficulty: 'medium', xp: 20, hint: 'Appreciate the nourishment your food provides.' },
    ],
  },
};
