import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen, type User } from "../features/auth";
import { BottomNavigation, type Screen } from "../shared/components/BottomNavigation";
import { Colors } from "../shared/constants/colors";
import { FontFamily, FontSize, FontWeight } from "../shared/styles/typography";

const screenLabels: Record<Screen, string> = {
  home: "الرئيسية",
  explore: "استكشف",
  "add-menu": "إضافة جديد",
  messages: "الرسائل",
  profile: "حسابي",
};

function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const currentLabel = useMemo(() => screenLabels[currentScreen], [currentScreen]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{currentLabel}</Text>
        <Text style={styles.subtitle}>Bottom navigation</Text>
      </View>

      <BottomNavigation currentScreen={currentScreen} onChangeScreen={setCurrentScreen} />
    </View>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <LoginScreen onSuccess={setUser} />;
  }

  return <MainApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: FontSize.hero,
    fontWeight: FontWeight.extrabold,
    color: Colors.foreground,
    fontFamily: FontFamily.cairo,
  },
  subtitle: {
    marginTop: 8,
    fontSize: FontSize.md,
    color: Colors.mutedForeground,
    fontFamily: FontFamily.cairo,
  },
});
