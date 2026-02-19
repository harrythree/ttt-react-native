import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Board = ({ board, handlePress, playerSymbol, botSymbol }: any) => {
  return (
    <View style={styles.center}>
      <Text style={styles.info}>
        You: {playerSymbol} — Bot: {botSymbol}
      </Text>
      <View style={styles.board}>
        {board.map((cell: any, i: number) => (
          <TouchableOpacity
            key={i}
            style={styles.cell}
            onPress={() => handlePress(i)}
          >
            <Text style={styles.cellText}>{cell ?? ""}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    margin: 8,
  },
  buttonText: { color: "white", fontWeight: "600" },
  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
  },
  cell: {
    width: "33.3333%",
    height: "33.3333%",
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: { fontSize: 48, fontWeight: "700" },
  info: { fontSize: 16 },
  resultBox: { marginTop: 24, alignItems: "center" },
  resultText: { fontSize: 28, fontWeight: "700", marginBottom: 12 },
});
