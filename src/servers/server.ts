import express, { Request, Response } from "express";
import { getPayloadClient } from "./get-payload";
import { handler, nextApp } from "../utils/next-util";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "@/tRPC/appRouter";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});
const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL}`);
      },
    },
  });

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.use((req: Request, res: Response) => handler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info(`NextJs started!`);
    app.listen(PORT, async () => {
      payload.logger.info(
        `NextJs App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};
start();
