# Contributing to Awara

We welcome contributions to help make Awara even better. Please take a moment to review these guidelines.

## How to Contribute

1.  **Fork the repository** and create your branch from `main`.
2.  **Make your changes.** Please ensure your code adheres to the existing style.
3.  **Test your changes** thoroughly on the Expo Go app.
4.  **Submit a pull request** with a clear description of your changes and why they are needed.

## Development Guidelines

-   **Code Style:** Follow the existing code style. We use Prettier for automated code formatting (a config can be added if needed).
-   **Component Structure:** Keep components small and focused on a single responsibility.
-   **State Management:** For any new global state, please use the existing `UserProgressContext` or discuss creating a new context if necessary.

## Future Ideas

-   Adding more challenge decks.
-   Implementing push notifications for daily reminders.
-   Integrating a backend service like Supabase to sync user progress across devices.
-   Creating a more detailed stats and history page.
