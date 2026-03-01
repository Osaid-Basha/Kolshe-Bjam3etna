import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Colors } from "../../../shared/constants/colors";
import { Dimensions } from "../../../shared/constants/dimensions";
import { Spacing } from "../../../shared/constants/spacing";
import { STRINGS } from "../../../shared/constants/strings";
import { FontFamily, FontSize, FontWeight } from "../../../shared/styles/typography";
import { login } from "../auth.repo";
import type { User } from "../auth.types";

type LoginScreenProps = {
  onSuccess: (user: User) => void;
};

export default function LoginScreen({ onSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function onLogin() {
    setError("");

    try {
      const user = await login({ email, password });
      onSuccess(user);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: Spacing.md,
        gap: Spacing.sm,
        backgroundColor: Colors.background,
      }}
    >
      <Text
        style={{
          color: Colors.foreground,
          fontFamily: FontFamily.cairo,
          fontSize: FontSize.base,
          fontWeight: FontWeight.semibold,
          textAlign: "right",
        }}
      >
        {STRINGS.authTitle}
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={STRINGS.authEmailPlaceholder}
        placeholderTextColor={Colors.mutedForeground}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: Colors.border,
          padding: Spacing.sm,
          borderRadius: Dimensions.radiusButton,
          backgroundColor: Colors.card,
          color: Colors.foreground,
          textAlign: "left",
        }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={STRINGS.authPasswordPlaceholder}
        placeholderTextColor={Colors.mutedForeground}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: Colors.border,
          padding: Spacing.sm,
          borderRadius: Dimensions.radiusButton,
          backgroundColor: Colors.card,
          color: Colors.foreground,
          textAlign: "left",
        }}
      />

      {!!error && (
        <Text style={{ color: Colors.destructive, textAlign: "right" }}>{error}</Text>
      )}

      <Button title={STRINGS.authLoginButton} onPress={onLogin} color={Colors.primary} />
    </View>
  );
}
