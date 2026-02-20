# Unbeatable Tic-Tac-Toe

## How to Run and Play

1. Pull down code from this repository
2. Run `npm install` inside root of project
3. To start with Expo Go run `npx expo start`
4. Select either "You Go First" or "Bot Goes First"
5. Tap any of the available cells on the game board to take your move. The bot player will act after you.
6. Once the game is over you can select "New Game" to play again

## Project Background

My goal with this project was to try and give a broad sample of how I like to build React/React Native projects. I wanted to focus on code quality, hooks, reusable components, types, and testing.

### Unbeatable

I started this project by trying to tackle to Tic-Tac-Toe bot player logic. I did some research and found a couple different solutions. I opted to go with the MinMax algorithm approach. I used Github Co-Pilot to generate a simple JavaScript only based MinMax algorithm for Tic-Tac-Toe and the code was actually pretty simple and straight forward, so I went this approach.

### React Native

I generated a new React Native project using the Expo CLI, using the Default TypeScript project. This would give me just enough to start building out the UI without adding too much unnecessary code.

### Hooks

Once I got the project scaffolded, I wanted to create a React Hook for the game logic. I was able to modify the AI generated code to very easily drop into my new hook to and begin to expose the logic that would be needed by the UI to make the game playable.

All of the state of the game is managed within the `useGame` hook using `useState`. This allowed me to expose only state and methods that were needed to play the game and keep all of the logic within either the hook itself or within the `game.ts` utility file.

### Components and Styling

I created a couple of examples of how I like to build reusable components as well as a simple approach to theming/styling. I like create a theme that pulls together a lot of the high level styles into one place so that the theme and styling is consistent across the UI. The ones I added here were Colors, Spacing, and Typography. This approach can be combined with a lot of styling frameworks like `react-native-unistyles` or `Styled Components`.

### Testing

I used `Jest` to write unit tests for the game logic within `game.ts`. Since I created a separate utility file to encapsulate the game logic, it made writing unit tests for the game logic very easy.
