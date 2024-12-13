export interface SelectProps {
  name: string;
  className?: string;
  options: { id: number; value: string }[];
  onSelect: (name: string, value: string) => void;
  targetOption: string | number;
}
