import { useToast } from '@chakra-ui/react';
import React from 'react';
import api from 'services/axios';
import { validCode } from './validCode';

export type SWRFetcherParams<T> = {
  url: string;
  validateCode?: (code: number) => boolean;
  parser?: (data: unknown) => T;
};

function useSWRFetcher<T>() {
  const toast = useToast();

  const fetcher = React.useCallback(
    async ({ url, validateCode, parser }: SWRFetcherParams<T>) => {
      const response = await api.get<T>({ url });

      if (
        validateCode
          ? validateCode(response.statusCode)
          : validCode(response.statusCode)
      ) {
        return parser ? parser(response.body) : response.body;
      }
      toast({
        title: 'Falha ao carregar esses dados',
        status: 'error',
        isClosable: true,
      });
    },
    [toast],
  );

  return fetcher;
}

export { useSWRFetcher };
