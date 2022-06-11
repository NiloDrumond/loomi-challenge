import React from 'react';
import { Button, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import AddProductMain from './AddProduct.Main';
import AddProductItem from './AddProduct.Item';

const AddProduct: React.FC = () => {
  const [items] = React.useState([1, 2]);

  return (
    <VStack mb={10} flex={1} alignItems="flex-start" spacing={5}>
      <Heading fontSize="2xl">Adicionar produto</Heading>
      <AddProductMain />
      <VStack
        boxShadow="md"
        bg="white"
        p={8}
        borderRadius="xl"
        spacing={12}
        w="100%"
      >
        <HStack w="100%" justifyContent="space-between">
          <Text>Itens</Text>
          <Button variant="ghost" leftIcon={<Icon as={FiPlus} />}>
            Adicionar
          </Button>
        </HStack>
        {items.map((item, index) => (
          <AddProductItem key={item} index={index} />
        ))}
      </VStack>
      <HStack spacing={4} px={8} pb={10} w="100%" justifyContent="flex-end">
        <Button bg="main.100" variant="solid">
          Cancelar
        </Button>
        <Button bg="brand.200" variant="solid">
          Criar
        </Button>
      </HStack>
    </VStack>
  );
};

export default AddProduct;
