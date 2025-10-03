# Awara - Technical Specification

This document outlines the technical architecture and key components of the Awara application.

## Project Structure

The source code is organized within the `src/` directory as follows:

-   `components/`: Reusable UI components used across multiple screens (e.g., `FlippableCard.js`).
-   `data/`: Static data for the application, such as the challenge definitions (`challenges.js`).
-   `screens/`: Top-level screen components that are managed by the navigation logic.
-   `services/`: Global logic and state management, primarily the `UserProgressContext.js`.
-   `styles/`: Global styling constants, including `themes.js`.

## Core Components

-   **`FlippableCard.js`**: The central UI element. It manages its own state for being "flipped" and handles the 3D flip animation. It displays either the locked state (hint, difficulty, XP) or the unlocked state (the full challenge).
-   **`FeedbackModal.js`**: A modal popup that appears after a challenge is completed. It also contains the `ConfettiCannon` component to display a celebratory animation.
-   **`ProgressBar.js`**: A simple component to visually display the user's XP progress for a specific category.

## State Management

Global state is managed using React's Context API.

-   **`UserProgressContext.js`**: This is the heart of the app's state. It provides the `progress` object and functions to update it.
    -   It tracks the user's selected `goal`.
    -   It tracks `level` and `xp` for each challenge category individually.
    -   It handles the level-up logic when XP thresholds are met.
    -   It automatically saves any changes to the user's progress to local storage using `AsyncStorage`.
    -   It handles data migration, so if the app is updated with a new data structure, it won't crash when loading old data.

## Navigation

Navigation is handled by **React Navigation**.

-   A `RootStack` navigator manages the initial flow from `OnboardingScreen` to the main app.
-   A `BottomTabNavigator` manages the main app interface, allowing users to switch between the "Decks" and "Profile" screens.
-   A nested `DeckStack` navigator is used within the "Decks" tab to handle the flow from the `ChallengeDeckScreen` to the `ChallengeSwiperScreen`. This allows the tab bar to remain visible while on the swiper screen.
