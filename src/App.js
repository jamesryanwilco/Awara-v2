import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import OnboardingScreen from './screens/OnboardingScreen';
import ChallengeDeckScreen from './screens/ChallengeDeckScreen';
import ChallengeSwiperScreen from './screens/ChallengeSwiperScreen';
import ProfileScreen from './screens/ProfileScreen';
import { UserProgressProvider } from './services/UserProgressContext';
import { COLORS, FONTS } from './styles/themes';
import { StatusBar } from 'expo-status-bar';

const RootStack = createStackNavigator();
const DeckStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.primary,
    background: COLORS.background,
    card: COLORS.surface2,
    text: COLORS.text,
    border: COLORS.border,
  },
};

function DeckStackNavigator() {
  return (
    <DeckStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.surface2 },
        headerTitleStyle: { ...FONTS.h2, color: COLORS.text },
        headerTintColor: COLORS.primary,
      }}
    >
      <DeckStack.Screen
        name="ChallengeDeck"
        component={ChallengeDeckScreen}
        options={{ title: 'Choose a Deck', headerBackVisible: false }}
      />
      <DeckStack.Screen
        name="ChallengeSwiper"
        component={ChallengeSwiperScreen}
        options={({ route }) => ({
          title: route.params?.deckTitle,
          headerBackVisible: false,
        })}
      />
    </DeckStack.Navigator>
  );
}

function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.surface1,
          borderTopColor: COLORS.border,
        },
        headerStyle: { backgroundColor: COLORS.surface2 },
        headerTitleStyle: { ...FONTS.h2, color: COLORS.text },
      })}
    >
      <Tab.Screen
        name="Decks"
        component={DeckStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProgressProvider>
      <StatusBar style="light" />
      <NavigationContainer theme={AppDarkTheme}>
        <RootStack.Navigator initialRouteName="Onboarding">
          <RootStack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="MainApp"
            component={MainAppTabs}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </UserProgressProvider>
  );
}
