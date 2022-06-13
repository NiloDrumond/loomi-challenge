import { NumericCardData } from '../NumericCard/NumericCard.types';

export type ConversionFunnelData = {
  totalPerDay: NumericCardData;
  productsViewPerMonth: NumericCardData;
  productPageConversionPerMonth: NumericCardData;
  addToCartPerMonth: NumericCardData;
  checkoutEmailPerMonth: NumericCardData;
  checkoutRegistrationPerMonth: NumericCardData;
  checkoutShippingPerMonth: NumericCardData;
};
