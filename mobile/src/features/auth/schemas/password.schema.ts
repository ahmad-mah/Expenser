import { z } from "zod";

export const signUpPasswordSchema = z
  .string()
  .min(8, "Min 8 characters")
  .max(64, "Max 64 characters")
  .refine((v) => /[A-Z]/.test(v), {
    message: "Add uppercase letter",
  })
  .refine((v) => /[a-z]/.test(v), {
    message: "Add lowercase letter",
  })
  .refine((v) => /[0-9]/.test(v), {
    message: "Add number",
  });



  export const signInPasswordSchema = z
  .string()
  .min(1, "Password is required");