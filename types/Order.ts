export type Item = {
  productName?: string;
  manifacturer?: string;
  quantity: number;
  size?: string;
  unit?: string;
  price?: number;
  currency?: string;
  includeVAT: boolean;
  minPrice?: number;
  maxPrice?: number;
  shop?: string;
  relatedURL?: string[];
  note?: string;
}

export type Order = {
  title: string;
  itemsList: Item[];
  due: Date;
  ordererName: string;
  buyerName: string;
  note: string;
}