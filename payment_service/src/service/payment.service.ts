import { GetOrderDetails } from "../utils";

export const CreatePayment = async (
  userId: number,
  orderId: number,
  paymentGateWay: unknown
) => {
  const order = await GetOrderDetails(orderId);
  if (order.customerId !== userId) {
    throw new Error("user not authorised to create payment");
  }
  return {
    secret: "my super secret",
    pubKey: "my super public key",
    amount: 100,
  };
};

export const verifyPayment = async (
  paymentId: string,
  paymentGateWay: unknown
) => {};
