import { Control, FieldPath } from 'react-hook-form';

export type NestedSelectOptions = (Option & {
  items: Option[];
})[];

export type NestedSelectValue = Record<string, string[] | undefined>;

export type NestedSelectProps = {
  options: NestedSelectOptions;
  selected?: NestedSelectValue;
  onChange: (value: NestedSelectValue) => void;
  inputLabel: string;
  selectTitle: string;
};

export type NestedSelectInputProps<
  TFields extends Record<string, unknown>,
  TName extends FieldPath<TFields>,
> = {
  name: TName;
  control: Control<TFields>;
  options: NestedSelectOptions;
  inputLabel: string;
  selectTitle: string;
};
