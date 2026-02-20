import { StyleSheet, Text, View } from "react-native";

import { SPACING, TYPOGRAPHY } from "../themes/theme";
import { GameResult, Result } from "../types/game";
import Button from "./button";

interface GameOverTypes {
  result: Result | null;
  newGame: () => void;
}

const resultTitles = {
  [GameResult.WIN]: "You Won",
  [GameResult.LOSE]: "You Lost",
  [GameResult.DRAW]: "Draw",
};

const GameOver = ({ result, newGame }: GameOverTypes) => {
  const resultText = result ? resultTitles[result] : "";

  return (
    <View style={styles.resultBox}>
      <Text style={styles.resultText}>{resultText}</Text>
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
