import { StyleSheet, Text, View } from "react-native";

import { SPACING, TYPOGRAPHY } from "../themes/theme";
import Button from "./button";

enum GameResult {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

interface GameOverTypes {
  result: GameResult;
  newGame: () => void;
}

const GameOver = ({ result, newGame }: GameOverTypes) => {
  const resultText = {
    [GameResult.WIN]: "You Won",
    [GameResult.LOSE]: "You Lost",
    [GameResult.DRAW]: "Draw",
  };

  return (
    <View style={styles.resultBox}>
      <Text style={styles.resultText}>{resultText[result]}</Text>
      <Button title="New Game" onPress={newGame} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  resultBox: {
    marginTop: SPACING.lg,
    alignItems: "center",
  },
  resultText: {
    fontSize: TYPOGRAPHY.sizes.heading,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.sm,
  },
});
