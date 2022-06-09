import React from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';

import PasswordInput from 'components/PasswordInput';
import Logo from 'assets/logo-icon.svg';
import BackgroundBox from 'components/BackgroundBox';

const Login: React.FC = () => {
  return (
    <Center position="relative" flex={1}>
      <BackgroundBox />
      <VStack
        spacing={8}
        zIndex={1}
        bg="white"
        w="40%"
        minWidth="fit-content"
        p="20"
        h="100%"
        justifyContent="center"
      >
        <VStack spacing={4} mb={4}>
          <Image height="auto" width="240px" src={Logo} />
          <Text color="main.500600" fontWeight={500}>
            Entrar na plataforma
          </Text>
        </VStack>
        <VStack>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="Digite seu e-mail" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <PasswordInput />
          </FormControl>
        </VStack>
        <Button variant="solid" colorScheme="brand" px={8} size="sm">
          Entrar
        </Button>
      </VStack>
    </Center>
  );
};

export default Login;
