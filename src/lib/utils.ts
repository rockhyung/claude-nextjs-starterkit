import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * shadcn/ui를 위한 클래스 유틸리티
 * Tailwind CSS 클래스를 안전하게 병합합니다
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
