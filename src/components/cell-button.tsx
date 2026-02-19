import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: { fontSize: 48, fontWeight: "700" },
});
