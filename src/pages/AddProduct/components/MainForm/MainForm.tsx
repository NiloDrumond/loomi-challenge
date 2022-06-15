import React from 'react';
import { Flex, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import { FormInputWrapper } from 'components/forms/FormInputWrapper';
import { FormSection } from 'components/forms/FormSection';
import { NestedSelectInput } from 'components/forms/NestedSelect/NestedSelect.Input';
import { Control, useFormContext } from 'react-hook-form';
import { categories, tags } from 'pages/AddProduct/AddProduct.data';
import { IProduct } from 'pages/AddProduct';

const MainForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IProduct>();
  const { register } = control;

  return (
    <VStack bg="white" p={8} borderRadius="xl" spacing={12} w="100%">
      <HStack alignItems="flex-start" spacing={20} w="100%">
        <FormSection title="Detalhes">
          <FormInputWrapper error={errors.name?.message} label="Nome">
            <Input {...register('name')} />
          </FormInputWrapper>
          <FormInputWrapper error={errors.id?.message} label="ID">
            <Input {...register('id')} />
          </FormInputWrapper>
          <FormInputWrapper error={errors.code?.message} label="Código">
            <Input {...register('code')} />
          </FormInputWrapper>
          <FormInputWrapper error={errors.seller?.message} label="Seller">
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
            inputLabel="Selecionar categorias"
            selectTitle="Categorias"
          />
        </FormSection>
        <FormSection title="Tags">
          <NestedSelectInput
            name="tags"
            options={tags}
            control={
              control as unknown as Control<Record<string, unknown>, unknown>
            }
            inputLabel="Selecionar tags"
            selectTitle="Tags"
          />
        </FormSection>
      </HStack>
      <Flex w="100%">
        <FormSection title="Especificações">
          <FormInputWrapper label="Subtítulo">
            <Input {...register('specificationsSubtitle')} />
          </FormInputWrapper>
          <FormInputWrapper topAlign label="Informações">
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

export { MainForm };
