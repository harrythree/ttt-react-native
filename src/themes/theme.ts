import { TextStyle } from "react-native";

export const COLORS = {
  primary: "#13b27a",
  secondary: "#2ecc71",
  background: "#ffffff",
  border: "#333333",
  text: "#333333",
  textSecondary: "#666666",
  textLight: "#ffffff",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

type FontWeight = TextStyle["fontWeight"];

interface Weights {
  regular: FontWeight;
  medium: FontWeight;
  bold: FontWeight;
}

interface Typography {
  sizes: {
    small: number;
    body: number;
    heading: number;
    title: number;
    cell: number;
  };
  weights: Weights;
}

export const TYPOGRAPHY: Typography = {
  sizes: {
    small: 12,
    body: 16,
    heading: 20,
    title: 24,
    cell: 48,
  },
  weights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};
