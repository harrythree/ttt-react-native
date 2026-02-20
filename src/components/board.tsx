import { StyleSheet, Text, View } from "react-native";

import { SPACING, TYPOGRAPHY } from "../themes/theme";
import { Cell } from "../types/game";
import CellButton from "./cell-button";

interface BoardProps {
  board: Cell[];
  handlePress: (index: number) => void;
  playerSymbol: Cell;
  botSymbol: Cell;
}

const Board = ({ board, handlePress, playerSymbol, botSymbol }: BoardProps) => {
  const cellButtons = board.map((cell: Cell, boardIndex: number) => (
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
    marginTop: SPACING.lg,
  },
  info: { fontSize: TYPOGRAPHY.sizes.body },
});
