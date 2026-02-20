import { StyleSheet, Text, View } from "react-native";

import { SPACING, TYPOGRAPHY } from "../themes/theme";
import Button from "./button";

const GameOver = ({ result, newGame }: any) => {
  const resultText =
    result === "win" ? "You Won" : result === "lose" ? "You Lost" : "Draw";

  return (
    <View style={styles.resultBox}>
      <Text style={styles.resultText}>{resultText}</Text>
      <Button title="New Game" onPress={newGame} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  resultBox: { marginTop: SPACING.lg, alignItems: "center" },
  resultText: {
    fontSize: TYPOGRAPHY.sizes.heading,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.sm,
  },
});
