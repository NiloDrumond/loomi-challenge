export interface IProductItem {
  code: string;
  cor: string;
  size: {
    length: number;
    width: number;
    height: number;
  };
  // images: string[];
}
export interface IProduct {
  name: string;
  id: string;
  code: string;
  seller: string;
  deliveryDate: string;
  specificationsSubtitle: string;
  specificationsInfo: string;
  specificationsCare: string;
  categories: Record<string, string[]>;
  tags: Record<string, string[]>;
  items: IProductItem[];
}
