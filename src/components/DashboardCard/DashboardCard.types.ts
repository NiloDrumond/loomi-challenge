export type DashboardCardColorSchemes = 'pink' | 'teal';

export type DashboardCardProps = {
  header: string;
  colorScheme?: DashboardCardColorSchemes;
  extraInfo?: string;
  description?: string;
  footer?: {
    prefix?: string;
    main: string;
    suffix?: string;
  };
};

export type DashboardCardColors = {
  extraInfo?: string;
  description?: string;
};
