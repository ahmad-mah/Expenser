import { z } from 'zod';
import { emailSchema } from './email.schema';
import { signUpPasswordSchema } from './password.schema';

export const signUpSchema = z.object({
  email: emailSchema,
  password: signUpPasswordSchema,
});

export type SignUpForm = z.infer<typeof signUpSchema>;
