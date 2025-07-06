import { Decimal } from "@/lib/generated/prisma/runtime/library";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number |Decimal  ; 
  brand: string;
  rating: Decimal | number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
  createdAt: Date;
}


