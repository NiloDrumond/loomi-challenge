import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import OrdersByMonth from './components/OrdersByMonth';
import ProfitExpectation from './components/ProfitExpectation';
import OrderCompletion from './components/OrderCompletion';

const Sales = () => {
  return (
    <Wrap spacing={8} w="100%">
      <WrapItem>
        <OrdersByMonth />
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
