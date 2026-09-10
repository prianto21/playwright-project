import { z } from "zod";

export const LoginRequestSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),
});