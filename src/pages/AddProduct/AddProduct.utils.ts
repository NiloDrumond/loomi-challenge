import { yup } from 'services/validations';

const schema = yup
  .object({
    name: yup.string().required().min(2).label('Nome'),
    id: yup.string().required().min(3).label('ID'),
    code: yup.string().required().min(3).label('Código'),
    seller: yup.string().required().min(3).label('Seller'),
  })
  .required();

export { schema };
