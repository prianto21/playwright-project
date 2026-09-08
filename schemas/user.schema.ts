import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
});