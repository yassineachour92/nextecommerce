import { ProductType } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Converts an object to a plain object by removing any prototype properties
export function convertToPlainObject<T>(data: T): ProductType {
    return JSON.parse(JSON.stringify(data));
}

//format number with decimal places
export function formatNumber(value: number): string {
    const [intValue, floatValue] = value.toFixed(2).split('.');
    return `${intValue}.${floatValue}`;
}