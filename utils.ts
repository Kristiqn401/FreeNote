import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Convert screen coordinates to canvas world coordinates
export function screenToWorld(
  screenX: number,
  screenY: number,
  viewOffset: { x: number; y: number },
  zoom: number
) {
  return {
    x: (screenX - viewOffset.x) / zoom,
    y: (screenY - viewOffset.y) / zoom,
  };
}

// Convert canvas world coordinates to screen coordinates
export function worldToScreen(
  worldX: number,
  worldY: number,
  viewOffset: { x: number; y: number },
  zoom: number
) {
  return {
    x: worldX * zoom + viewOffset.x,
    y: worldY * zoom + viewOffset.y,
  };
}
