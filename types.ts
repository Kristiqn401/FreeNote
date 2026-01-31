export type ElementType = 'text' | 'note' | 'image' | 'shape';
export type ThemeType = 'light' | 'dark' | 'paper' | 'neon';

export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  content: string; // Text content, Image URL, or Shape Type
  style: ElementStyle;
  zIndex: number;
  locked: boolean;
}

export interface ElementStyle {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: 'normal' | 'italic';
  textDecoration?: 'none' | 'underline' | 'line-through';
  textAlign?: 'left' | 'center' | 'right';
  opacity?: number;
  shadow?: boolean;
}

export interface CanvasState {
  elements: CanvasElement[];
  selectedIds: string[];
  viewOffset: { x: number; y: number };
  zoom: number;
  tool: 'select' | 'hand' | 'text' | 'note' | 'shape' | 'image';
  theme: ThemeType;
  isDragging: boolean;
  history: CanvasElement[][]; // Simple undo stack
  historyIndex: number;
  editingId: string | null; // ID of the element currently being processed by AI
}

export interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  initialElements: { id: string; x: number; y: number }[];
  mode: 'move' | 'resize' | 'rotate' | 'pan' | 'select-box';
  resizeHandle?: string; // 'nw', 'ne', 'se', 'sw'
}

export interface Note {
  id: string;
  title: string;
  updatedAt: number;
  elements: CanvasElement[];
  thumbnail?: string; // Optional preview
}