import React from 'react';
import { Flex, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import FormInputWrapper from 'components/forms/FormInputWrapper';
import FormSection from 'components/forms/FormSection';
import NestedSelectInput from 'components/forms/NestedSelect/NestedSelect.Input';
import { Control } from 'react-hook-form';
import { categories, tags } from 'pages/AddProduct/AddProduct.data';
import { MainFormProps } from './MainForm.types';

const MainForm = ({ control }: MainFormProps) => {
  const { register } = control;

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
            <Input {...register('name')} />
          </FormInputWrapper>
          <FormInputWrapper label="ID">
            <Input {...register('id')} />
          </FormInputWrapper>
          <FormInputWrapper label="Código">
            <Input {...register('code')} />
          </FormInputWrapper>
          <FormInputWrapper label="Seller">
            <Input {...register('seller')} />
          </FormInputWrapper>
          <FormInputWrapper label="Prazo de entrega">
            <Input type="date" {...register('deliveryDate')} />
          </FormInputWrapper>
        </FormSection>
        <FormSection title="Categorias">
          <NestedSelectInput
            name="categories"
            options={categories}
            control={
              control as unknown as Control<Record<string, unknown>, unknown>
            }
          />
        </FormSection>
        <FormSection title="Tags">
          <NestedSelectInput
            name="tags"
            options={tags}
            control={
              control as unknown as Control<Record<string, unknown>, unknown>
            }
          />
        </FormSection>
      </HStack>
      <Flex w="100%">
        <FormSection title="Especificacoes">
          <FormInputWrapper label="Subtitulo">
            <Input {...register('specificationsSubtitle')} />
          </FormInputWrapper>
          <FormInputWrapper topAlign label="Informacoes">
            <Textarea {...register('specificationsInfo')} />
          </FormInputWrapper>
          <FormInputWrapper topAlign label="Limpeza e cuidados">
            <Textarea {...register('specificationsCare')} />
          </FormInputWrapper>
        </FormSection>
      </Flex>
    </VStack>
  );
};

export default MainForm;
