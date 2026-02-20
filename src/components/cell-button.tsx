import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../themes/theme";

const CellButton = ({ onPress, title }: any) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.cellText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CellButton;

const styles = StyleSheet.create({
  cell: {
    width: "33.3333%",
    height: "33.3333%",
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    fontSize: TYPOGRAPHY.sizes.cell,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
});
