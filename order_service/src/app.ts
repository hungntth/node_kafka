import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import cartRouter from "./routes/cart.routes";
import orderRouter from "./routes/order.routes";
import { InitializeBroker } from "./service/broker.service";
import { HandleErrorWithLogger, httpLogger } from "./utils";

export const ExpressApp = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(httpLogger);

  await InitializeBroker();

  app.use(cartRouter);
  app.use(orderRouter);

  app.use("/", (req: Request, res: Response, _: NextFunction): any => {
    return res.status(200).json({ message: "I am healthy!" });
  });

  app.use(HandleErrorWithLogger);

  return app;
};
