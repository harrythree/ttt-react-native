import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GameOver = ({ result, newGame }: any) => {
  const resultText =
    result === "win" ? "You Won" : result === "lose" ? "You Lost" : "Draw";

  return (
    <View style={styles.resultBox}>
      <Text style={styles.resultText}>{resultText}</Text>
      <TouchableOpacity style={styles.button} onPress={newGame}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    margin: 8,
  },
  buttonText: { color: "white", fontWeight: "600" },
  resultBox: { marginTop: 24, alignItems: "center" },
  resultText: { fontSize: 28, fontWeight: "700", marginBottom: 12 },
});
