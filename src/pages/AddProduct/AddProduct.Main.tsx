import React from 'react';
import { Flex, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import FormInputWrapper from 'components/forms/FormInputWrapper';
import FormSection from 'components/forms/FormSection';

const AddProductMain: React.FC = () => {
  return (
    <VStack
      boxShadow="md"
      bg="white"
      p={8}
      borderRadius="xl"
      spacing={12}
      w="100%"
    >
      <HStack alignItems="flex-start" spacing={20} w="100%">
        <FormSection title="Detalhes">
          <FormInputWrapper label="Nome">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper label="ID">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper label="Codigo">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper label="Seller">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper label="Prazo de entrega">
            <Input />
          </FormInputWrapper>
        </FormSection>
        <FormSection title="Categorias">
          <FormInputWrapper label="Nome">
            <Input />
          </FormInputWrapper>
        </FormSection>
        <FormSection title="Tags">
          <FormInputWrapper label="Nome">
            <Input />
          </FormInputWrapper>
        </FormSection>
      </HStack>
      <Flex w="100%">
        <FormSection title="Especificacoes">
          <FormInputWrapper label="Subtitulo">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper topAlign label="Informacoes">
            <Textarea />
          </FormInputWrapper>
          <FormInputWrapper topAlign label="Limpeza e cuidados">
            <Textarea />
          </FormInputWrapper>
        </FormSection>
      </Flex>
    </VStack>
  );
};

export default AddProductMain;
