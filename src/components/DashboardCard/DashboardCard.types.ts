export type DashboardCardColorSchemes = 'pink' | 'teal';

export type DashboardCardFooter = {
  prefix?: string;
  main: string;
  suffix?: string;
};

export type DashboardCardProps = {
  isLoading?: boolean;
  header?: string;
  colorScheme?: DashboardCardColorSchemes;
  extraInfo?: string;
  description?: string;
  footer?: DashboardCardFooter;
};

export type DashboardCardColors = {
  extraInfo?: string;
  description?: string;
};
