import { StyleSheet, Text, View } from "react-native";

import CellButton from "./cell-button";

const Board = ({ board, handlePress, playerSymbol, botSymbol }: any) => {
  const cellButtons = board.map((cell: string, boardIndex: number) => (
    <CellButton
      key={boardIndex}
      title={cell ?? ""}
      onPress={() => handlePress(boardIndex)}
    />
  ));

  return (
    <View style={styles.center}>
      <Text style={styles.info}>
        You: {playerSymbol} — Bot: {botSymbol}
      </Text>
      <View style={styles.board}>{cellButtons}</View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
  },
  info: { fontSize: 16 },
});
