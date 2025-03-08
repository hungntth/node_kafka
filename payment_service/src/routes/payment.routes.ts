import express, { response } from "express";
import * as service from "../service/payment.service";
import { RequestAuthorizer } from "./middleware";

const router = express.Router();
const PaymentGateway = {};

router.post("/create-payment", RequestAuthorizer, async (req, res, next) => {
  const user = req.user;
  if (!user) {
    next(new Error("User not found"));
    return;
  }

  const { orderNumber } = req.body;
  const response = await service.CreatePayment(
    user.id,
    orderNumber,
    PaymentGateway
  );
  res.status(200).json({ message: "Payment successfull" });
});

router.get("/verify-payment/:id", RequestAuthorizer, async (req, res, next) => {
  const user = req.user;
  if (!user) {
    next(new Error("User not found"));
    return;
  }

  const paymentId = req.params.id;
  if (!paymentId) {
    next(new Error("Payment ID not found"));
    return;
  }

  await service.verifyPayment(paymentId, PaymentGateway);

  res.status(200).json({ message: "Payment verified", data: response });
});

export default router;
