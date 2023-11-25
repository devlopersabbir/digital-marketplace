import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().trim().email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 8 characters long." })
    .max(20, { message: "Password must be at max 20 characters." }),
});
export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
