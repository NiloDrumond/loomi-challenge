export type AccordionProps = {
  name: string;
  items: Option[];
  onChange: (value: string) => void;
  selected: string[];
};
