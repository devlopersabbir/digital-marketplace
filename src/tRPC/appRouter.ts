import { publicProcedure, router } from "@/tRPC";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello";
  }),
});

export type TAppRouter = typeof appRouter;
