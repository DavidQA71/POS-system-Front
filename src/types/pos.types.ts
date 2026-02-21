export interface IProducts {
  code: number;
  description: string;
  price: number;
  stock: number;
}


export interface IGetProductResponse {
  statusCode: number;
  statusMessage: string;
  product: IProducts;
}

export interface ISearchProductResponse {
  statusCode: number;
  statusMessage: string;
  product: IProducts[];
}

export interface IAddTempSaleItem {
  code: number;
  description: string;
  price: number;
  quantity: number;
  total: number;
}

export interface IGetTempSaleResponse {
  
}