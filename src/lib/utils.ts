import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unaccent = (str: string) =>
  str.normalize('NFD').replace(/\p{Diacritic}/gu, '');

export const normalizePattern = (pattern: string) =>
  unaccent(pattern).toUpperCase();
