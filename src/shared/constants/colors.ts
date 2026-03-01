export const LightColors = {
  background: "#f2f2f7",
  foreground: "#1c1c1e",
  card: "rgba(255,255,255,0.72)",
  primary: "#2563eb",
  secondary: "rgba(120,120,128,0.08)",
  mutedForeground: "#8e8e93",
  destructive: "#ff3b30",
  border: "rgba(60,60,67,0.08)",
} as const;

export const DarkColors = {
  background: "#000000",
  foreground: "#ffffff",
  card: "rgba(28,28,30,0.72)",
  primary: "#0a84ff",
  secondary: "rgba(120,120,128,0.24)",
  mutedForeground: "#8e8e93",
  destructive: "#ff453a",
  border: "rgba(84,84,88,0.36)",
} as const;

export const SemanticColors = {
  blue: "#2563eb",
  green: "#34c759",
  orange: "#ff9500",
  red: "#ff3b30",
  violet: "#af52de",
  lightBlue: "#5ac8fa",
} as const;

export const Colors = LightColors;
