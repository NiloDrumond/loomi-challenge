import React from 'react';
import DashboardCard from 'components/DashboardCard';
import moment from 'moment';
import { NumericCardProps } from './NumericCard.types';

const NumericCard = ({
  data,
  footer,
  header,
  inRelationTo = 'month',
}: NumericCardProps) => {
  return !data ? (
    <DashboardCard header={header} isLoading />
  ) : (
    <DashboardCard
      header={header}
      colorScheme={data.growth >= 0 ? 'teal' : 'pink'}
      extraInfo={`${data.growth >= 0 ? '+' : '-'} ${Math.abs(data.growth)} %`}
      description={
        inRelationTo === 'month'
          ? `em relação a ${moment().subtract(1, 'month').format('MMMM')}`
          : 'em relação a ontem'
      }
      footer={footer(data.value)}
    />
  );
};

export default NumericCard;
