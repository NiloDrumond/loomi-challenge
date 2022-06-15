import { API } from 'config';
import { api } from 'services/axios';
import { SignInData, SignInResponse } from './Auth.types';

async function signInService({ email, password }: SignInData): Promise<string> {
  const response = await api.post<SignInResponse>({
    url: API.LOGIN_URL,
    body: {
      email,
      senha: password,
    },
  });
  if (response.body?.['access-token']) return response.body?.['access-token'];

  throw new Error();
}

export { signInService };
