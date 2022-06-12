import React from 'react';
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { PasswordInputProps } from './PasswordInput.types';

function PasswordInput({ registerReturn }: PasswordInputProps) {
  const [show, setShow] = React.useState(false);

  return (
    <InputGroup>
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Digite sua senha"
        {...registerReturn}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          aria-label="esconder senha"
          size="sm"
          onClick={() => setShow(!show)}
          p={2}
          icon={
            show ? (
              <Icon size="lg" as={FiEyeOff} />
            ) : (
              <Icon size="lg" as={FiEye} />
            )
          }
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
