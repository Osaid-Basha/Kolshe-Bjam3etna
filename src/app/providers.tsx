import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}
