import { z } from "zod";

// o zod dentro desse arquivo serve para validar se tem url, caso não, ele já dispara erro e nem deixa a aplicação rodar
const envSchema = z.object({
  // ##configMock
  MODE: z.enum(["production", "development", "test"]),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
});

export const env = envSchema.parse(import.meta.env);
