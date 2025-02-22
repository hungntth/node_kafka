import { CartRepositoryType } from "../types/repository.type";

const createCart = async (intput: any): Promise<{}> => {
  return Promise.resolve(intput);
};

const findCart = async (intput: any): Promise<{}> => {
  return Promise.resolve(intput);
};

const updateCart = async (intput: any): Promise<{}> => {
  return Promise.resolve(intput);
};

const deleteCart = async (intput: any): Promise<{}> => {
  return Promise.resolve(intput);
};

export const CartRepository: CartRepositoryType = {
  create: createCart,
  find: findCart,
  update: updateCart,
  delete: deleteCart,
};
