export interface Product {
   id?: number;
   title: string;
   price: number;
   image: string;
   qtd?: number;
}

export interface ProductsResponse extends Array<Product> {}
