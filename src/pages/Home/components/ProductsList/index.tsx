import React from 'react';
import useSWR from 'swr';
import {
  Heading,
  HStack,
  Spinner,
  VStack,
  Text,
  IconButton,
  Icon,
  Box,
  Flex,
} from '@chakra-ui/react';
import Card from 'components/Card';
import SearchBar from 'components/forms/SearchBar';
import { API } from 'config';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ProductsResponse } from './ProductsList.types';
import TableItem from './components/TableItem';
import TableHeader from './components/TableHeader';
import NoContent from './components/NoContent';

const ProductsList = () => {
  const [page, setPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const fetcher = useSWRFetcher<ProductsResponse>();

  const { data } = useSWR(
    `${API.PRODUCTS_URL}?page=${page}&limit=7${
      searchQuery.length > 0 ? `&search=${searchQuery}` : ''
    }`,
    fetcher,
  );

  const onSearch = React.useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

  const renderItems = React.useCallback(() => {
    if (!data)
      return (
        <Box pt="10">
          <Spinner />
        </Box>
      );
    if (data.length === 0) return <NoContent />;
    return data.map((p) => <TableItem key={p.id} product={p} />);
  }, [data]);

  return (
    <Flex w="100%" pb={20}>
      <Card w="100%" spacing={10}>
        <HStack w="100%" justifyContent="space-between">
          <Heading fontSize="2xl">Listagem de Produtos</Heading>
          <SearchBar
            onChange={onSearch}
            inputProps={{ placeholder: 'Pesquisar produtos', size: 'lg' }}
            containerProps={{ maxW: '96' }}
          />
        </HStack>
        <VStack w="100%" spacing={0}>
          <TableHeader />
          {renderItems()}
        </VStack>
        <HStack w="100%" justifyContent="flex-end">
          <HStack alignItems="center" spacing={2}>
            {/* To define the amount of pages the api would need to provider a totalItems count */}
            <Text color="gray.400">{`${page} de 40`}</Text>
            <IconButton
              isDisabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              aria-label="voltar página"
              variant="solid"
              icon={<Icon w={6} h={6} as={FiChevronLeft} />}
            />
            <IconButton
              aria-label="próxima página"
              onClick={() => setPage((prev) => prev + 1)}
              variant="solid"
              icon={<Icon w={6} h={6} as={FiChevronRight} />}
            />
          </HStack>
        </HStack>
      </Card>
    </Flex>
  );
};

export default ProductsList;
