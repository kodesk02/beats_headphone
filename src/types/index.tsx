export interface Variant {
  name: string;
  color: string;
  gradient: string;
  description: string;
}

export interface CartItem {
  variant: Variant;
  quantity: number;
  price: number;
}

export type Page = 'product' | 'checkout' | 'success';