import express, { Request, Response } from "express";
import { getPayloadClient } from "./get-payload";
import { handler, nextApp } from "../utils/next-util";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL}`);
      },
    },
  });

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
