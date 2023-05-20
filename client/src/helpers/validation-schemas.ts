import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});

export const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name should be at least 2 characters")
      .max(20, "Max characters allowed is 20"),
    lastName: z
      .string()
      .min(2, "Last name should be at least 2 characters")
      .max(20, "Max characters allowed is 20"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password should be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password should be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
