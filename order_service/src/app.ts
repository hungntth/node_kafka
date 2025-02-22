import express, { Request, Response } from "express";
import cors from "cors";
import cartRouter from "./routes/cart.routes";
import orderRouter from "./routes/order.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(cartRouter);
app.use(orderRouter);

app.use("/", (req: Request, res: Response): any => {
  return res.status(200).json({ message: "I am healthy!" });
});

export default app;
