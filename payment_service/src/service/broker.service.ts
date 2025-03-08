import { Producer } from "kafkajs";
import { MessageBroker } from "../utils";
import { PaymentEvents } from "../types";

export const InitializeBroker = async () => {
  const producer = await MessageBroker.connectProducer<Producer>();
  producer.on("producer.connect", async () => {
    console.log("Oerder Service producer connected successfully");
  });

  // const consumer = await MessageBroker.connectConsumer<Consumer>();
  // consumer.on("consumer.connect", async () => {
  //   console.log("Oerder Service consumer connected successfully");
  // });

  // await MessageBroker.subscribe(HandleSubscription, "PaymentEventss");
};

export const SendPaymentUpdateMessage = async (data: any) => {
  console.log(data);
  await MessageBroker.publish({
    event: PaymentEvents.UPDATE_PAYMENT,
    topic: "OrderEvents",
    headers: {},
    message: {
      data,
    },
  });
};
