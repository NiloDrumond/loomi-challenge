import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { DailyTicket } from './components/DailyTicket';
import { MonthlyTicket } from './components/MonthlyTicket';
import { Alerts } from './components/Alerts';
import { MonthlyOrders } from './components/MonthlyOrders';
import { MonthlySales } from './components/MonthlySales';

const Overview = () => {
  return (
    <Wrap spacing={8}>
      <WrapItem w="60">
        <DailyTicket />
      </WrapItem>
      <WrapItem w="60">
        <MonthlyTicket />
      </WrapItem>
      <Alerts />
      <WrapItem w="60">
        <MonthlyOrders />
      </WrapItem>
      <WrapItem w="60">
        <MonthlySales />
      </WrapItem>
    </Wrap>
  );
};

export { Overview };
