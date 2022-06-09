import React from 'react';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Image,
  Input,
  VStack,
  Box,
} from '@chakra-ui/react';
import hexRgb from 'hex-rgb';

import Background from '../../assets/curve-patterns.svg';
import Logo from '../../assets/logo-icon.svg';
import PasswordInput from '../../components/PasswordInput';

const Login: React.FC = () => {
  return (
    <Center position="relative" flex={1}>
      <Box
        position="absolute"
        bg="#f6f6f9"
        bgImg={Background}
        w="100%"
        h="100%"
      />
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
          <Text color="text.600" fontWeight={500}>
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
        <Button colorScheme="brand" px={8} size="sm">
          Entrar
        </Button>
      </VStack>
    </Center>
  );
};

export default Login;
