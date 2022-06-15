import React from 'react';
import { Text, Wrap, WrapItem } from '@chakra-ui/react';
import { Card } from 'components/Card';
import { useSWRFetcher } from 'utils/useSWRFetcher';
import useSWR from 'swr';
import { API } from 'config';
import { mapToValue } from 'utils/mapToValue';
import { ByAge } from './components/ByAge';
import { ByGender } from './components/ByGender';
import { ByType } from './components/ByType';
import { UsersResumeData } from './UsersProfile.types';
import { parseResponse } from './UsersResume.utils';

const UsersResume = () => {
  const fetcher = useSWRFetcher<UsersResumeData>({ parser: parseResponse });
  const { data } = useSWR(API.USERS_RESUME_URL, fetcher);

  return (
    <Wrap spacing={8} w="100%">
      <WrapItem>
        <Card px={6}>
          <Text fontWeight={700} color="main.500">
            Transações por idade
          </Text>
          <ByAge
            data={data ? mapToValue(data.transactionsPerAge) : undefined}
          />
        </Card>
      </WrapItem>
      <WrapItem>
        <Card px={6} spacing={9}>
          <Text fontWeight={700} color="main.500">
            Sessões por gênero
          </Text>
          <ByGender data={data?.sessionsPerSex} />
        </Card>
      </WrapItem>
      <WrapItem>
        <Card px={6} spacing={12}>
          <Text fontWeight={700} color="main.500">
            Transações por tipo de cliente
          </Text>
          <ByType
            data={data ? mapToValue(data.transactionsPerClientType) : undefined}
          />
        </Card>
      </WrapItem>
    </Wrap>
  );
};

export { UsersResume };
