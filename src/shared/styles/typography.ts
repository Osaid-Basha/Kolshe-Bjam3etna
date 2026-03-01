import { StyleSheet } from "react-native";

export const FontFamily = {
  cairo: "Cairo",
} as const;

export const FontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
} as const;

export const FontSize = {
  xxs: 9,
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 20,
  xl: 24,
  hero: 30,
} as const;

export const Typography = StyleSheet.create({
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.extrabold,
    fontFamily: FontFamily.cairo,
  },
  body: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.cairo,
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.cairo,
  },
});
