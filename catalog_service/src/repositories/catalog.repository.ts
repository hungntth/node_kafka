import { ICatalogRepository } from "../interfaces/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogRepository implements ICatalogRepository {
  create(data: any): Promise<Product> {
    throw new Error("Method not implemented");
  }
  update(data: any): Promise<Product> {
    throw new Error("Method not implemented");
  }
  delete(id: any) {
    throw new Error("Method not implemented");
  }
  find(): Promise<Product[]> {
    throw new Error("Method not implemented");
  }
  findOne(id: any): Promise<Product> {
    throw new Error("Method not implemented");
  }
}
