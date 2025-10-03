# Final MVP Plan – Gamified Mindful Eating App

## 🎯 Goal of MVP

Validate whether users engage with and enjoy a choice-driven, gamified approach to mindful eating using an interactive card reveal format.

---

## Core Features (must-have)

### ✅ Onboarding

-   **Short questionnaire:** Gather user goals (e.g., weight management, emotional eating, general health).
-   **Explain concept:** Introduce the core mechanic: “Level up by choosing, revealing, and completing mindful eating challenges.”

### ✅ Challenge Decks & Card Reveal System

This is an interactive, choice-driven model where users select challenges from different decks.

-   **Browse with Hints:** Users swipe through a carousel of "locked" cards. Each card displays a hint, difficulty level, and XP reward, but not the challenge itself.
-   **Interactive Reveal:** Users tap a "Select Challenge" button on a card. This triggers a celebratory confetti animation and reveals the full challenge text.
-   **Categorized Decks:** Challenges are grouped into themed decks. The MVP includes:
    -   **Deck 1: Awareness Basics**
    -   **Deck 2: Presence & Control**
-   **User Autonomy:** Instead of being assigned a task, users can browse and select a challenge that resonates with them.

### ✅ Completion Feedback

-   **One-tap Completion:** After revealing a challenge, a "Complete Challenge" button appears. Tapping it awards the user their XP.
-   **Instant Reward:** A modal popup with an encouraging message appears immediately upon completion.

### ✅ Progress Tracking (Per Category)

-   **Categorized Levels & XP:** Users have a separate level and XP bar for each challenge category (e.g., "Awareness Basics").
-   **Level-Up Mechanic:** When a category's XP bar is full, the user's level for that category increases, and the XP bar resets.
-   **Streak Counter:** Tracks consecutive days of challenge completion.
-   **Goal Display:** The user's primary goal, selected during onboarding, is displayed on their profile.

---

## MVP Challenge Content

(Challenge content remains the same, but now includes `difficulty`, `xp`, and `hint` fields).

### Deck 1: Awareness Basics
-   Pause for 1 deep breath before eating.
-   Put down your fork halfway through your meal.
-   Eat the first 3 bites slowly.
-   Rate hunger (1–5) before your meal.
-   Notice your fullness at the end of your meal.

### Deck 2: Presence & Control
-   Eat one snack without distractions (no phone/TV).
-   Chew each bite 10 times.
-   Pause 30 seconds before responding to a craving.
-   Drink a glass of water before snacking.
-   End one meal with gratitude (say or think one thing).

---

## Tech Stack (lean approach)

-   **Frontend:** React Native (with Expo)
-   **Local Storage:** `@react-native-async-storage/async-storage` for data persistence.
-   **Backend/Database:** Deferred post-MVP (previously Supabase).
-   **Hosting:** Vercel (for future web versions).
-   **Development Platform:** Expo Go

---

## Success Metrics

-   **Activation:** % of users who complete their 1st challenge.
-   **Engagement:** Average daily challenges completed. Number of different decks explored.
-   **Retention:** % of users still active after 7 and 14 days.
-   **Delight (Qualitative):**
    -   Do users enjoy the "reveal" mechanic?
    -   Does the confetti and XP feel rewarding?
    -   Which decks are most popular?

---

## Rollout Strategy

(Rollout strategy remains the same).
