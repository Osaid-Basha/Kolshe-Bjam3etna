import React from "react";
import AppNavigator from "./AppNavigator";
import AppProviders from "./providers";

export default function AppRoot() {
  return React.createElement(AppProviders, null, React.createElement(AppNavigator));
}
