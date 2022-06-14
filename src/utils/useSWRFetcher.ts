import { useToast } from '@chakra-ui/react';
import React from 'react';
import api from 'services/axios';
import { validCode } from './validCode';

export type SWRFetcherConfig<T> = {
  validateCode?: (code: number) => boolean;
  parser?: (data: unknown) => T;
};

function useSWRFetcher<T>(config?: SWRFetcherConfig<T>) {
  const toast = useToast();

  const parser = React.useMemo(() => {
    if (config && config.parser) return config.parser;
    return undefined;
  }, [config]);

  const validateCode = React.useMemo(() => {
    if (config && config.validateCode) return config.validateCode;
    return validCode;
  }, [config]);

  const fetcher = React.useCallback(
    async (url: string) => {
      const response = await api.get<T>({ url });

      if (validateCode(response.statusCode)) {
        return parser ? parser(response.body) : response.body;
      }
      toast({
        position: 'top-left',
        title: 'Falha ao carregar esses dados',
        status: 'error',
        isClosable: true,
      });
    },
    [toast, parser, validateCode],
  );

  return fetcher;
}

export { useSWRFetcher };
