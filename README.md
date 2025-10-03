# Awara - Gamified Mindful Eating App

This is a React Native application built with Expo, designed to help users practice mindful eating through a fun, gamified experience. Users can choose from different decks of challenges, reveal them with a celebratory animation, and track their progress through a per-category leveling system.

## ✨ Core Features

-   **Interactive Onboarding:** A guided setup to choose a primary wellness goal.
-   **Challenge Decks:** Themed decks of challenges (e.g., "Awareness Basics").
-   **Card Reveal Mechanic:** Users select cards based on hints, difficulty, and XP, then reveal the challenge with a confetti animation.
-   **Per-Category Progress:** Separate leveling and XP tracking for each challenge category.
-   **Local Persistence:** User progress is saved locally on the device.
-   **Dark Mode Theme:** A sleek, modern dark mode UI.

## 🚀 Getting Started

### Prerequisites

-   Node.js (LTS version recommended)
-   Expo Go app on your iOS or Android device

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/jamesryanwilco/Awara-v2.git
    cd Awara-v2
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the application:**
    ```sh
    npm start
    ```

4.  **Open the app:**
    -   Scan the QR code displayed in the terminal with the camera on your iOS device or with the Expo Go app on your Android device.

## 🛠️ Tech Stack

-   **Frontend:** React Native with Expo
-   **Navigation:** React Navigation (Stack & Bottom Tabs)
-   **State Management:** React Context API
-   **Local Storage:** `@react-native-async-storage/async-storage`
-   **Styling:** Custom theme file with consistent colors, sizes, and fonts.
