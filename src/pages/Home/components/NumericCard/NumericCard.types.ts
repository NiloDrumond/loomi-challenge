import { DashboardCardFooter } from 'components/DashboardCard/DashboardCard.types';

export type NumericCardData = {
  value: number;
  growth: number;
};

export type NumericCardProps = {
  header: string;
  data?: NumericCardData;
  inRelationTo?: 'month' | 'day';
  footer: (value: number) => DashboardCardFooter;
};
