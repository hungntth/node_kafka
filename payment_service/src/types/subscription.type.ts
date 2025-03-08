export enum PaymentEvents {
  CREATE_PAYMENT = "create_payment",
  CANCEL_PAYMENT = "cancel_payment",
  UPDATE_PAYMENT = "update_payment",
}

export type TOPIC_TYPE = "OrderEvents";

export interface MessageType {
  headers?: Record<string, any>;
  event: PaymentEvents;
  data: Record<string, any>;
}
