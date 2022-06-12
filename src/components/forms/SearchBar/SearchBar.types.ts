import { InputGroupProps, InputProps } from '@chakra-ui/react';

export type SearchBarProps = {
  onChange: (value: string) => void;
  inputProps?: InputProps;
  containerProps?: InputGroupProps;
};
