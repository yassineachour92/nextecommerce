import { z } from "zod";
import { insertProductSchema } from "@/lib/validator";

export type ProductType = z.infer<typeof insertProductSchema> & {
  id: string;
  name: string;
  slug: string;
  category: string;
  images: string[];
  brand: string;
  description: string;
  stock: number;
  price: number;
  rating: number; // Noté en nombre
  numReviews: number;
  isFeatured: boolean;
  banner: string | null;
  createdAt: Date;
};

