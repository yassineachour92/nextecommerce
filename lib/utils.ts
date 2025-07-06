import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Converts an object to a plain object by removing any prototype properties
export function convertToPlainObject<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}
