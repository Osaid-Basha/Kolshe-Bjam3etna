export const Routes = {
  Auth: "Auth",
  Main: "Main",
} as const;

export type RouteName = (typeof Routes)[keyof typeof Routes];
