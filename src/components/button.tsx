import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, SPACING, TYPOGRAPHY } from "../themes/theme";

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
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    borderRadius: SPACING.sm,
    margin: SPACING.md,
  },
  buttonText: {
    color: COLORS.textLight,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
});
