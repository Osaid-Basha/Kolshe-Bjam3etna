import type { User } from "./auth.types";

export const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: "1",
    name: "Test User",
    email: "test@test.com",
    password: "123456",
  },
];
