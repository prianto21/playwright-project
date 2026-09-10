import { z } from "zod";

export const LoginResponseSchema = z.object({
  token: z.string(),
});

export const LoginErrorSchema = z.object({
  error: z.string(),
});