
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  pieces?: string;
}

export interface Category {
  id: string;
  label: string;
  active?: boolean;
}

export interface NavItem {
  label: string;
  hasSubmenu?: boolean;
}
