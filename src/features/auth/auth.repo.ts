import { MOCK_USERS } from "./auth.mock";
import type { LoginInput, User } from "./auth.types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function login(input: LoginInput): Promise<User> {
  await delay(250);

  const user = MOCK_USERS.find(
    (item) => item.email.toLowerCase() === input.email.trim().toLowerCase()
  );

  if (!user || user.password !== input.password) {
    throw new Error("Invalid email or password");
  }

  return { id: user.id, name: user.name, email: user.email };
}
