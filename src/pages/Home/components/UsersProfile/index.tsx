import React from 'react';
import { Text, Wrap, WrapItem } from '@chakra-ui/react';
import Card from 'components/Card';
import ByAgeChart from './components/ByAgeChart';
import ByGenderChart from './components/ByGenderChart';
import ByTypeChart from './components/ByTypeChart';

const UsersProfile = () => {
  return (
    <Wrap spacing={8} w="100%">
      <WrapItem>
        <Card>
          <Text fontWeight={700} color="main.500">
            Transações por idade
          </Text>
          <ByAgeChart />
        </Card>
      </WrapItem>
      <WrapItem>
        <Card spacing={9}>
          <Text fontWeight={700} color="main.500">
            Sessões por gênero
          </Text>
          <ByGenderChart />
        </Card>
      </WrapItem>
      <WrapItem>
        <Card spacing={12}>
          <Text fontWeight={700} color="main.500">
            Transações por tipo de cliente
          </Text>
          <ByTypeChart />
        </Card>
      </WrapItem>
    </Wrap>
  );
};

export default UsersProfile;
