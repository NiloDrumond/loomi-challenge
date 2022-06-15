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
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import Logo from 'assets/logo-icon.svg';
import { PasswordInput } from 'components/forms/PasswordInput';
import { BackgroundBox } from 'components/BackgroundBox';
import { useAuth } from 'hooks/auth/useAuth';
import { useOnEnterPressed } from 'utils/useOnEnterPressed';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginForm } from './Login.types';
import { schema } from './Login.utils';

const Login = () => {
  const { signIn, isLoading, token } = useAuth();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema, { abortEarly: false }),
  });

  const onSubmit = React.useCallback(
    async (data: LoginForm) => {
      signIn(data);
    },
    [signIn],
  );

  useOnEnterPressed(handleSubmit(onSubmit));

  if (token) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

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
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input
              {...register('email')}
              placeholder="Digite seu e-mail"
              type="email"
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Senha</FormLabel>
            <PasswordInput registerReturn={register('password')} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </VStack>
        <Button
          isLoading={isLoading}
          onClick={handleSubmit(onSubmit)}
          variant="solid"
          bg="brand.main"
          color="white"
          px={8}
          size="sm"
        >
          Entrar
        </Button>
      </VStack>
    </Center>
  );
};

export { Login };
