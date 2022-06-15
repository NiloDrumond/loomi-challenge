import { kebabToCamel } from 'utils/kebabToCamel';
import { NumericCardData } from 'components/NumericCard/NumericCard.types';
import { ConversionFunnelData } from './ConversionFunnel.types';

function parseResponse(raw: unknown): ConversionFunnelData {
  const parsed = Object.entries(raw as Record<string, NumericCardData>).map(
    (r) => [kebabToCamel(r[0]), r[1]],
  );
  return Object.fromEntries(parsed);
}

export { parseResponse };
