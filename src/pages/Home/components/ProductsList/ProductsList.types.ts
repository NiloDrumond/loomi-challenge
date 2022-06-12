export type ApiProduct = {
  createdAt: Date;
  name: string;
  color: string;
  status: string;
  description: string;
  id: string;
};

export type ProductsResponse = ApiProduct[];
