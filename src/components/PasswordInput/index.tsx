import React from 'react';
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function PasswordInput() {
  const [show, setShow] = React.useState(false);

  return (
    <InputGroup>
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Digite sua senha"
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
