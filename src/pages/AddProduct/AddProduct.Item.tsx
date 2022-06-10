import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Box,
  Input,
  Flex,
  Center,
  Icon,
  IconButton,
  Select,
} from '@chakra-ui/react';
import FormSection from 'components/forms/FormSection';
import FormInputWrapper from 'components/forms/FormInputWrapper';
import { FiPlus, FiX } from 'react-icons/fi';
import WithAlert from 'components/WithAlert';
import { AddProductItemProps } from './AddProduct.types';
import { colors } from './AddProduct.data';

const AddProductItem: React.FC<AddProductItemProps> = ({ index }) => {
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
          onConfirm={() => null}
          confirmLabel="Deletar"
          renderTrigger={({ onOpen }) => (
            <IconButton
              size="sm"
              icon={<Icon as={FiX} />}
              aria-label=""
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
          <FormInputWrapper label="Codigo">
            <Input />
          </FormInputWrapper>
          <FormInputWrapper label="Cor">
            <Select>
              {colors.map(({ label, value }) => (
                // eslint-disable-next-line react/jsx-key
                <option value={value}>{label}</option>
              ))}
            </Select>
          </FormInputWrapper>
          <FormInputWrapper label="Tamanho">
            <HStack spacing={2}>
              <HStack spacing={0.5}>
                <Input />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
              <Text fontWeight={600}>x</Text>
              <HStack spacing={0.5}>
                <Input />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
              <Text fontWeight={600}>x</Text>
              <HStack spacing={0.5}>
                <Input />
                <Text fontSize="sm" whiteSpace="nowrap">
                  m
                </Text>
              </HStack>
            </HStack>
          </FormInputWrapper>
        </FormSection>
        <Flex flex={2}>
          <FormInputWrapper topAlign label="Imagens">
            <Center bg="main.100" w="20" h="20">
              <Icon as={FiPlus} />
            </Center>
          </FormInputWrapper>
        </Flex>
      </HStack>
    </VStack>
  );
};

export default AddProductItem;
