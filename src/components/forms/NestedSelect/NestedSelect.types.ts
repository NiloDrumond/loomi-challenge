import { Control, FieldPath } from 'react-hook-form';

export type NestedSelectOptions = (Option & {
  items: Option[];
})[];

export type NestedSelectValue = Record<string, string[] | undefined>;

export type NestedSelectProps = {
  options: NestedSelectOptions;
  selected?: NestedSelectValue;
  onChange: (value: NestedSelectValue) => void;
};

export type NestedSelectAccordionProps = {
  name: string;
  items: Option[];
  onChange: (value: string) => void;
  selected: string[];
};

export type NestedSelectInputProps<
  TFields extends Record<string, unknown>,
  TName extends FieldPath<TFields>,
> = {
  name: TName;
  control: Control<TFields>;
  options: NestedSelectOptions;
};
