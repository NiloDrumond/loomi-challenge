import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Box,
  Input,
  Flex,
  Icon,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { FormSection } from 'components/forms/FormSection';
import { FormInputWrapper } from 'components/forms/FormInputWrapper';
import { FiX } from 'react-icons/fi';
import { WithAlert } from 'components/WithAlert';
import { Controller } from 'react-hook-form';
import { colors } from 'pages/AddProduct/AddProduct.data';
import { UploadInput } from 'components/forms/UploadInput';
import { ItemsListItemProps } from './ItemsList.types';

const ItemsListItem = ({ index, remove, control }: ItemsListItemProps) => {
  const { register } = control;

  const name = React.useMemo(() => {
    return String(index + 1).padStart(2, '0');
  }, [index]);

  return (
    <VStack spacing={8} w="100%">
      <HStack
        // ------------
        // Aligns the labels with the "x" instead of the button itself
        ml={-4}
        // ------------
        w="100%"
        spacing={4}
      >
        <WithAlert
          header={`Deletar item ${name}`}
          onConfirm={() => remove(index)}
          confirmLabel="Deletar"
          renderTrigger={({ onOpen }) => (
            <IconButton
              size="sm"
              icon={<Icon as={FiX} />}
              aria-label={`Deletar item ${name}`}
              onClick={onOpen}
              variant="ghost"
              color="red.600"
              _hover={{
                bg: 'red.200',
                color: 'red.900',
              }}
            />
          )}
        />
        <Text>Item {name}</Text>
        <Box flex={1} borderBottomWidth="1px" borderColor="gray.200" />
      </HStack>
      <HStack spacing={16} w="100%">
        <FormSection containerProps={{ minW: '400px' }}>
          <FormInputWrapper label="Código">
            <Input {...register(`items.${index}.code`)} />
          </FormInputWrapper>
          <FormInputWrapper label="Cor">
            <Controller
              name={`items.${index}.color`}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onChange={(e) =>
                    onChange({
                      target: {
                        name: `items.${index}.color`,
                        value: e.target.value,
                      },
                    })
                  }
                >
                  {colors.map(({ label, value: v }) => (
                    <option key={v} value={v}>
                      {label}
                    </option>
                  ))}
                </Select>
              )}
            />
          </FormInputWrapper>
          <FormInputWrapper label="Tamanho">
            <HStack spacing={2}>
              <HStack spacing={0.5}>
                <Input {...register(`items.${index}.size.length`)} />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
              <Text fontWeight={600}>x</Text>
              <HStack spacing={0.5}>
                <Input {...register(`items.${index}.size.width`)} />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
              <Text fontWeight={600}>x</Text>
              <HStack spacing={0.5}>
                <Input {...register(`items.${index}.size.height`)} />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
            </HStack>
          </FormInputWrapper>
        </FormSection>
        <Flex flex={2}>
          <FormInputWrapper topAlign label="Imagens">
            {/* I didn't bother to integrate with hook-form as it won't be going to the api anyway */}
            <UploadInput />
          </FormInputWrapper>
        </Flex>
      </HStack>
    </VStack>
  );
};

export { ItemsListItem };
