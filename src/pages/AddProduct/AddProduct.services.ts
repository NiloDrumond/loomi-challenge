import { getLeaves } from 'components/forms/NestedSelect/NestedSelect.utils';
import { API } from 'config';
import { api } from 'services/axios';
import { htmlDatetoSec } from 'utils/htmlDateToSec';
import { validCode } from 'utils/validCode';
import { IProduct } from './AddProduct.types';

async function createProductService(product: IProduct): Promise<void> {
  const {
    code,
    id,
    items,
    seller,
    specificationsCare,
    specificationsInfo,
    specificationsSubtitle,
    deliveryDate,
    categories,
    tags,
    name,
  } = product;

  const parsedBody = {
    name,
    code,
    items,
    seller,
    specificationsCare,
    specificationsInfo,
    specificationsSubtitle,
    deliveryDate: htmlDatetoSec(deliveryDate),
    productId: id,
    categories: getLeaves(categories),
    tags: getLeaves(tags),
  };

  const response = await api.post({
    url: API.CREATE_PRODUCT,
    body: parsedBody,
  });

  if (!validCode(response.statusCode)) throw new Error();
}

export { createProductService };
