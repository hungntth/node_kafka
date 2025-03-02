import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(1)
  price: number;

  @IsNumber()
  stock: number;
}

export class UpdateProductRequest {
  name?: string;

  description?: string;

  price?: number;

  @IsNumber()
  stock?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  variant: string;
}

