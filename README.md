# Kolshe-Bjam3etna

React Native (Expo) mobile app with a custom bottom navigation and a simple login flow.

## Setup

```bash
npm install
npm start
```

Useful scripts:

- `npm run android` - Start Expo for Android.
- `npm run ios` - Start Expo for iOS.
- `npm run web` - Start Expo for web.
- `npm run lint` - Run ESLint checks.
- `npm run reset-project` - Run the Expo reset helper script.

## File-By-File Guide

### Root Files

- `App.tsx` - App entry file; exports `AppRoot` from `src/app`.
- `app.json` - Expo app configuration (name, slug, icons, splash, platform options).
- `package.json` - Project metadata, scripts, runtime dependencies, and dev dependencies.
- `package-lock.json` - Auto-generated npm lockfile for exact dependency versions.
- `tsconfig.json` - TypeScript config (strict mode, path aliases, included files).
- `eslint.config.js` - ESLint setup using Expo's flat config preset.
- `README.md` - Project documentation.

### Scripts

- `scripts/reset-project.js` - Utility script from Expo starter template to reset/move starter folders.

### Source: App Layer (`src/app`)

- `src/app/index.ts` - `AppRoot` composition (`AppProviders` + `AppNavigator`).
- `src/app/providers.tsx` - Global providers wrapper (currently `SafeAreaProvider`).
- `src/app/AppNavigator.tsx` - Main app flow: shows `LoginScreen` when no user is authenticated, then shows the tab app (currently only `home`) using custom `BottomNavigation` as the tab bar.

### Source: Features (`src/features`)

- `src/features/auth/screens/LoginScreen.tsx` - Login UI + mock login logic + exported `User` type.
- `src/features/home/screens/HomeScreen.tsx` - Home screen shown after successful login.

### Source: Shared Components (`src/shared/components`)

- `src/shared/components/BottomNavigation.tsx` - Custom bottom navigation UI used by React Navigation tab bar.

### Source: Shared Constants (`src/shared/constants`)

- `src/shared/constants/colors.ts` - Light/Dark/Semantic color tokens and active `Colors` export.
- `src/shared/constants/dimensions.ts` - Layout and size tokens (radii, FAB sizes, icon sizes).
- `src/shared/constants/icons.ts` - Icon name sets (`IconSet`) used by UI components.
- `src/shared/constants/spacing.ts` - Spacing scale tokens.
- `src/shared/constants/strings.ts` - App and auth strings.

### Source: Shared Styles (`src/shared/styles`)

- `src/shared/styles/typography.ts` - Font families, weights, sizes, and reusable typography styles.

### Source: Shared Hooks (`src/shared/hooks`)

- `src/shared/hooks/hook.tsx` - Placeholder hook file (currently empty).

### Assets

- `src/assets/images/Logo/logo.jpg` - Logo image asset.
