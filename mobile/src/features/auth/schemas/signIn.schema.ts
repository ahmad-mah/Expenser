// src/features/auth/schemas/signIn.schema.ts
import { z } from "zod";
import { emailSchema } from "./email.schema";
import { signInPasswordSchema } from "./password.schema";

export const signInSchema = z.object({
  email: emailSchema,
  password: signInPasswordSchema,
});

export type SignInForm = z.infer<typeof signInSchema>;