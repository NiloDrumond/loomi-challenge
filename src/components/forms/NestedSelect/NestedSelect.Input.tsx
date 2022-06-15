import React from 'react';
import {
  Controller,
  FieldPath,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import NestedSelect from '.';
import {
  NestedSelectInputProps,
  NestedSelectValue,
} from './NestedSelect.types';

function NestedSelectInput<
  TFields extends Record<string, unknown>,
  TName extends FieldPath<TFields>,
>({
  control,
  name,
  options,
  inputLabel,
  selectTitle,
}: NestedSelectInputProps<TFields, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={{} as UnpackNestedValue<PathValue<TFields, TName>>}
      render={({ field: { onChange, value } }) => (
        <NestedSelect
          onChange={v => onChange({ target: { name, value: v } })}
          selected={value as NestedSelectValue}
          options={options}
          inputLabel={inputLabel}
          selectTitle={selectTitle}
        />
      )}
    />
  );
}

export default NestedSelectInput;
