import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DECKS } from '../data/challenges';

const UserProgressContext = createContext();
const STORAGE_KEY = '@userProgress';
const XP_PER_LEVEL = 100;

const initialProgress = {
  goal: null,
  level: {
    [DECKS.AWARENESS_BASICS]: 1,
    [DECKS.PRESENCE_CONTROL]: 1,
  },
  xp: {
    [DECKS.AWARENESS_BASICS]: 0,
    [DECKS.PRESENCE_CONTROL]: 0,
  },
  streak: 0,
  completedChallenges: [],
};

export const UserProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const storedProgressJSON = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedProgressJSON) {
          const storedProgress = JSON.parse(storedProgressJSON);
          
          // Merge loaded data with defaults to handle data structure changes
          const migratedProgress = {
            ...initialProgress,
            ...storedProgress,
            level: {
              ...initialProgress.level,
              ...(storedProgress.level && typeof storedProgress.level === 'object' ? storedProgress.level : {}),
            },
            xp: {
              ...initialProgress.xp,
              ...(storedProgress.xp && typeof storedProgress.xp === 'object' ? storedProgress.xp : {}),
            },
          };
          setProgress(migratedProgress);
        }
      } catch (e) {
        console.error('Failed to load progress.', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const saveProgress = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
          console.error('Failed to save progress.', e);
        }
      };
      saveProgress();
    }
  }, [progress, isLoading]);

  const setGoal = (goal) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      goal,
    }));
  };

  const completeChallenge = (challengeId, deckId, xp) => {
    setProgress((prevProgress) => {
      const newXp = prevProgress.xp[deckId] + xp;
      const currentLevel = prevProgress.level[deckId];

      let newLevel = currentLevel;
      let updatedXp = newXp;

      if (updatedXp >= XP_PER_LEVEL) {
        newLevel += 1;
        updatedXp -= XP_PER_LEVEL; // Reset XP, carrying over the remainder
      }

      return {
        ...prevProgress,
        level: {
          ...prevProgress.level,
          [deckId]: newLevel,
        },
        xp: {
          ...prevProgress.xp,
          [deckId]: updatedXp,
        },
        streak: prevProgress.streak + 1, // This is a simplification
        completedChallenges: [...prevProgress.completedChallenges, challengeId],
      };
    });
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <UserProgressContext.Provider value={{ progress, setGoal, completeChallenge }}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  return useContext(UserProgressContext);
};
