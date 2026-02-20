import { COLORS, TYPOGRAPHY } from "@/src/themes/theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Tic-Tac-Toe",
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.textLight,
        headerTitleStyle: {
          fontWeight: TYPOGRAPHY.weights.bold,
        },
      }}
    />
  );
}
