import express, { Request, Response } from "express";

const router = express.Router();

router.post("/product", (req: Request, res: Response) => {
  res.status(201).json({});
});

export default router;
