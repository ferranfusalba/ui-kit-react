export interface SvgElementProps {
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  color?: string;
  fill?: string;
  className?: string;
  viewBox?: string;
  id?: string;
  opacity?: number;
  x?: string;
  y?: string;
  isResponsive?: boolean;
  style?: {
    [k: string]: string;
  };
}
