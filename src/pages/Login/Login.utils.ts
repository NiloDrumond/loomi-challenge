import { yup } from 'services/validations';

const schema = yup
  .object({
    email: yup.string().required().email().label('E-mail'),
    password: yup.string().required().min(3).label('Senha'),
  })
  .required();

export { schema };
