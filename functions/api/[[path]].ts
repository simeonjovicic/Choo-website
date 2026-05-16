import { handleApiRequest } from "../_shared/router";
import type { Env } from "../_shared/types";

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  return handleApiRequest(request, env);
};
