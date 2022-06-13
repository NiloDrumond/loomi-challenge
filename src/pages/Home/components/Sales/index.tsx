import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import OrdersPerMonth from './components/OrdersPerMonth';
import ProfitExpectation from './components/ProfitExpectation';
import OrderCompletion from './components/OrderCompletion';

const Sales = () => {
  return (
    <Wrap spacing={8} w="100%">
      <WrapItem>
        <OrdersPerMonth />
      </WrapItem>
      <WrapItem>
        <ProfitExpectation />
      </WrapItem>
      <WrapItem>
        <OrderCompletion />
      </WrapItem>
    </Wrap>
  );
};

export default Sales;
