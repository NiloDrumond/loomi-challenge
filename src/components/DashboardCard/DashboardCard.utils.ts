import {
  DashboardCardColors,
  DashboardCardColorSchemes,
} from './DashboardCard.types';

function getColors(
  colorScheme?: DashboardCardColorSchemes,
): DashboardCardColors {
  if (colorScheme) {
    switch (colorScheme) {
      case 'pink':
        return { description: 'pink.500', extraInfo: 'pink.500' };
      case 'teal':
        return { description: 'teal.400', extraInfo: 'teal.500' };
      default:
        return {};
    }
  }
  return {
    description: undefined,
    extraInfo: undefined,
  };
}

export { getColors };
