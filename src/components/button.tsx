import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, title }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    margin: 8,
  },
  buttonText: { color: "white", fontWeight: "600" },
});
