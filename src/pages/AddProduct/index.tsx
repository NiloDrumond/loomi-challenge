import React from 'react';
import { Button, Heading, HStack, useToast, VStack } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IProduct } from './AddProduct.types';
import ItemsList from './components/ItemsList';
import { createProductService } from './AddProduct.services';
import MainForm from './components/MainForm';

const AddProduct: React.FC = () => {
  const methods = useForm<IProduct>();
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = React.useCallback(
    async (data: IProduct) => {
      try {
        await createProductService(data);
        toast({
          position: 'top-left',
          title: 'Produto criado com sucesso',
          status: 'success',
          isClosable: true,
        });
        navigate({ pathname: '/app' });
      } catch {
        toast({
          position: 'top-left',
          title: 'Falha ao criar produto',
          status: 'error',
          isClosable: true,
        });
      }
    },
    [navigate, toast],
  );

  return (
    <FormProvider {...methods}>
      <VStack mb={10} flex={1} alignItems="flex-start" spacing={5}>
        <Heading fontSize="2xl">Adicionar produto</Heading>
        <MainForm control={methods.control} />
        <ItemsList control={methods.control} />
        <HStack spacing={4} px={8} pb={10} w="100%" justifyContent="flex-end">
          <Button bg="main.100" variant="solid">
            Cancelar
          </Button>
          <Button
            onClick={methods.handleSubmit(onSubmit)}
            bg="brand.confirm"
            variant="solid"
          >
            Criar
          </Button>
        </HStack>
      </VStack>
    </FormProvider>
  );
};

export default AddProduct;
