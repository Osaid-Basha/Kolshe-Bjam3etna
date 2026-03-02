import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import LoginScreen, { type User } from "../features/auth/screens/LoginScreen";

import HomeScreen from "../features/home/screens/HomeScreen";
import { BottomNavigation, type Screen } from "../shared/components/BottomNavigation";

type AppTabsParamList = {
  home: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

const TAB_TITLES: Record<Screen, string> = {
  home: "الرئيسية",
  explore: "استكشف",
  "add-menu": "إضافة جديد",
  messages: "الرسائل",
  profile: "حسابي",
};

function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const currentScreen = (state.routes[state.index]?.name as Screen) ?? "home";

  return (
    <BottomNavigation
      currentScreen={currentScreen}
      onChangeScreen={(screen) => {
        if (screen === "home") {
          navigation.navigate("home");
        }
       
      }}
    />
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
            <Tab.Screen name="home" component={HomeScreen} options={{ title: TAB_TITLES.home }} />

    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <LoginScreen onSuccess={setUser} />;
  }

  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
