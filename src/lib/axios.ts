import axios from "axios";

// o zod dentro desse arquivo serve para validar se tem url, caso não, ele já dispara erro e nem deixa a aplicação rodar
import { env } from "@/env";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // envia automaticamente os cookies do front-end nas rotas
});

// para fazer a requisição demore mais
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    );

    return config;
  });
}
