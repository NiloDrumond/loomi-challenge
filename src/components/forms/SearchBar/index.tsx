import React from 'react';
import { useDebounce } from 'use-debounce';
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarProps } from './SearchBar.types';

function SearchBar({ onChange, inputProps, containerProps }: SearchBarProps) {
  const [text, setText] = React.useState('');
  const [value] = useDebounce(text, 300);

  React.useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <InputGroup {...containerProps}>
      <Input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
        pr="4.5rem"
        {...inputProps}
      />
      <InputRightElement width="4.5rem">
        <Icon as={FiSearch} />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchBar;
