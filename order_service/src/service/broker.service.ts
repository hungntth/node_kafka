import { Consumer, Producer } from "kafkajs";
import { MessageBroker } from "../utils";
import { HandleSubscription } from "./order.service";
import { OrderEvent } from "../types";

export const InitializeBroker = async () => {
  const producer = await MessageBroker.connectProducer<Producer>();
  producer.on("producer.connect", async () => {
    console.log("producer connected successfully");
  });

  const consumer = await MessageBroker.connectConsumer<Consumer>();
  consumer.on("consumer.connect", async () => {
    console.log("consumer connected successfully");
  });

  await MessageBroker.subscribe(HandleSubscription, "OrderEvents");
};

export const SendCreateOrderMessage = async (data: any) => {
  await MessageBroker.publish({
    event: OrderEvent.CREATE_ORDER,
    topic: "CatalogEvents",
    headers: {},
    message: data,
  });
};
