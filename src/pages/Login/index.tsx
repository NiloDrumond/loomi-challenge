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

import PasswordInput from 'components/PasswordInput';
import Logo from 'assets/logo-icon.svg';
import BackgroundBox from 'components/BackgroundBox';
import { useAuth } from 'hooks/auth/useAuth';
import { yup } from 'services/validations';
import { useOnEnterPressed } from 'styles/utils/useOnEnterPressed';
import { LoginForm } from './Login.types';

const schema = yup
  .object({
    email: yup.string().required().email().label('E-mail'),
    password: yup.string().required().min(3).label('Senha'),
  })
  .required();

const Login: React.FC = () => {
  const { signIn, isLoading } = useAuth();
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

export default Login;
